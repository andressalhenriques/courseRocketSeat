import fs from 'fs'
import csvParse from 'csv-parse'
import { inject, injectable } from "tsyringe"

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategory {
  description: string
  name: string
}
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository){}
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = []

      const stream = fs.createReadStream(file.path)
      const parseFile = csvParse()
      stream.pipe(parseFile)
      parseFile.on('data', async (line) => {
        const [description, name] = line
        categories.push({
          description,
          name
        })
    }).on('end', () => {
      fs.promises.unlink(file.path)
      resolve(categories)
    })
    .on('error', (err) => {
      reject((err))
    })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async (category) => {
      const { description, name } = category
      const existCategory = await this.categoriesRepository.findByName(name)

      if (!existCategory) {
        await this.categoriesRepository.create({
          description,
          name,
        })
      }
    })
  }
}

export { ImportCategoryUseCase }

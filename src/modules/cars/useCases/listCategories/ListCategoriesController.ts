import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute()
    console.log('ListCategoriesController')

    console.log({categories})

    return response.json(categories)
  }
}

export { ListCategoriesController }
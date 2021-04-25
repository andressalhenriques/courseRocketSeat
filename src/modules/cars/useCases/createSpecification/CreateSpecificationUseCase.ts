import { inject, injectable } from "tsyringe"

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  description: string
  name: string
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository) {}

  execute({description, name}: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) throw new Error("Specification already exists")

    this.specificationRepository.create({name, description})
  }
}

export { CreateSpecificationUseCase }
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  description: string
  name: string
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({description, name}: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) throw new Error("Specification already exists")

    this.specificationRepository.create({name, description})
  }
}

export { CreateSpecificationUseCase }
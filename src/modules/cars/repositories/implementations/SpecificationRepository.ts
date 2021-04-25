import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[]
  constructor () {
    this.specifications = []
  }
  
  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification()
    
    Object.assign(specification, {
      description,
      name,
      createdAt: new Date()
    })
    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name )
    return specification
  }
}

export { SpecificationRepository }
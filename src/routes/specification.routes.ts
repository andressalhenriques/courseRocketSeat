import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationRoutes = Router()

const specificationRepository = new SpecificationRepository()

specificationRoutes.post("/", (request, response) => {
  const { description, name } = request.body
  
  const createSpecificationService = new CreateSpecificationService(specificationRepository)
  createSpecificationService.execute({ description, name })
  return response.status(201).send()
})

export { specificationRoutes }
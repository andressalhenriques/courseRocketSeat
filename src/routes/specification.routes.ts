import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationRoutes = Router()

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})

export { specificationRoutes }
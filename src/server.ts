import express from 'express'
const swaggerUi = require('swagger-ui-express')

import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(3001, () => console.log("Server is running"))

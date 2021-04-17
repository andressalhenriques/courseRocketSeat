import express, { request, response } from 'express'
import { categoriesRoutes } from './routes/Categories.routes'
import { specificationRoutes } from './routes/specification.routes'

const app = express()
app.use(express.json())

app.use("/categories", categoriesRoutes)
app.use("/specification", specificationRoutes)


app.listen(3001, () => console.log("Server is running"))

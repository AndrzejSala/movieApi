import express from 'express'
import { initRoutes } from './routes/routes'

const app = express()

initRoutes(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

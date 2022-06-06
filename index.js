console.clear()
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const port = process.env.PORT || 3003
const expressApp = express()

expressApp.use(express.static('public/images'))
expressApp.use(express.static('public'))
expressApp.use(express.json())
expressApp.use(cors())

expressApp.post('/', (req, res) => {
  console.log(req.body)
  res.send('recibido')
})

expressApp.get('/imagen', (req, res) => {

  res.send(`http://localhost:${port}/image.jpeg`)
})
expressApp.listen(port, () => {
  console.log('hola desde el puerto ' + port)
})

console.clear()
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const port = process.env.PORT || 4445

const expressApp = express()

expressApp.get('/image', (req, res) => {
  res.send('recibido')
})

expressApp.listen(port, () => {
  console.log('hola desde el puerto ' + port)
})

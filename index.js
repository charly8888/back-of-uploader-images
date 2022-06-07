console.clear()
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'fs'
import multer from 'multer'
dotenv.config()

const upload = multer({ storage: multer.memoryStorage() })
const port = process.env.PORT || 3003
const expressApp = express()

expressApp.use(express.static('uploads'))
expressApp.use(cors())
expressApp.use(express.json())

expressApp.get('/', (req, res) => {
  res.send('hola mundo desde HEROKU')
})

expressApp.post('/', upload.single('file'), (req, res) => {
  const file = req.file
  console.log(file)

  const type = function (mimetype) {
    let arr = mimetype.split('/')
    console.log(arr)
    return arr
  }
  if (type(file.mimetype)[0] !== 'image')
    return res.status(400).send('el archivo no es de tipo imagen')

  const fileName = +new Date()
  const typeOfFile = type(file.mimetype)[1]
  const newPath = `uploads/${fileName}.${typeOfFile}`
  fs.writeFileSync(newPath, req.file.buffer)

  res.send({
    newPath: `/${fileName}.${typeOfFile}`,
  })
})

expressApp.listen(port, () => {
  console.log('hola desde el puerto ' + port)
})

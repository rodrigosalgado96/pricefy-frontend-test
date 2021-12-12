const express = require('express')
const consign = require('consign')
const cors = require('cors')

module.exports = () => {
 const app = express()
//  const options = cors.options = {
//    origin: '*'
//  }

//  app.use(cors(options))

 app.use(express.json())
 app.use(express.urlencoded({ extended: true }))

 consign()
   .include('controllers')
   .into(app)

 return app
}
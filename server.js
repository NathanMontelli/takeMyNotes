const express = require('express')
const path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use(require('./routes/noteRoutes.js'))
app.use(require('./routes/index.js'))

const PORT = process.env.PORT || 3000
app.listen(PORT)
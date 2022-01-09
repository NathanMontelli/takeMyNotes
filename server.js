const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended:true }))
app.use(expess.json())

app.use(require('./routes/index.js'))
app.use(require('./routes/noteRoutes.js'))

app.listen(3000 )
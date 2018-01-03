const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3000)

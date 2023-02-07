const express = require('express')

const port = 8000

express()

.use(express.json())
.get('/hello', (req, res) => {
  res.status(200).json({status: 200, message: "Hello World!"})
})

.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
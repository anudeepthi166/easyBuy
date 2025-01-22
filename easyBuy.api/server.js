const express = require('express')
const app = express()

// TODO: read from env
const port = 3000

app.listen(port,()=>{console.log(`Server started on port: ${port}`)})

const 
express = require('express'),
cors = require('cors'),
dotenv = require('dotenv').config(),
app =express(),
PORT = process.env.PORT

require('./db')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())


require('./router')(app)

app.listen(PORT, ()=> console.log(`server is runing on port ${PORT}`))
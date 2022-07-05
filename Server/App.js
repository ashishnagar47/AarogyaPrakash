const express= require('express') 
const app=express()
const PORT=process.env.PORT || 5000
const mongoose= require('mongoose')
const {MONGOURI}= require('./config/Key')

require('./models/user')
require('./models/Treatment')
require('./models/Blog')
require('./models/Event')
require('./models/Appointment')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/treatRoute'))
app.use(require('./routes/blogRoute'))
app.use(require('./routes/eventRoute'))
app.use(require('./routes/appointmentRoute'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})




mongoose.connection.on('connected',()=>{
    console.log("connected to MONGO")
})

mongoose.connection.on('error',(err)=>{
    console.log("ohh No",err)
})

// tUqiCq3yC2yL4w5r

if(process.env.NODE_ENV=="production"){
    app.use(express.static('my-app/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'my-app',build,'index.html'))
    })
}

app.listen(PORT,()=>{
    console.log('server is running on ',PORT)
})
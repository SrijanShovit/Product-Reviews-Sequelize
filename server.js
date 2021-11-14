const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
    origin : 'https://localhost:8081'
}

//middlewares
app.use(cors(corOptions));

app.use(express.json())

app.use(express.urlencoded({extended: true}))  //parses incoming requests with urlencoded payloads and is based on body-parser


//routers
const router = require('./routes/productRouter')
//main url ; invoke router when this url visited
app.use('/api/products',router)



//testing api
app.get('/',(req, res) =>{
    res.json({ message: 'hello  from api'})
})

//port 
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
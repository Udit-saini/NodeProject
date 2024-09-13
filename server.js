const express = require('express')
const app = express()
const db=require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
require('dotenv').config();
// const PORT=process.env.PORT||3002;


const AdharRoutes=require('./routes/AdharRoutes')
app.use('/adhar',AdharRoutes)
app.listen(3001)

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);
app.listen(3000)


// app.listen(PORT,()=>{
//     console.log('listen on 3000'); 
// })
//hi this comment is added for testing purpose
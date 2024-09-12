const express = require('express')
const app = express()
const db=require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json());



const AdharRoutes=require('./routes/AdharRoutes')
app.use('/Adhar',AdharRoutes)
app.listen(3001)

const personRoutes = require('./routes/personRoutes');
app.use('/Person',personRoutes);
app.listen(3000)
const express = require('express')
const router =express.Router();
const Person=require('./../models/person')
router.post('/',async(req,res)=>{
    try{
      //assuming the request body contains the person data 
      const data=req.body;
      //create a new document using the mongoose model
      const newPerson=new Person(data);
      //save the data into database
      const response= await newPerson.save();
      console.log("saved");
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json(response);
    }
  })
  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log("Data fetched");
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  //paramitrized url
  router.get('/:workType', async(req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef'|| workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log("done");
        res.status(200).json(response);
      }
      else{
        res.status(500).json({error:`internal error`})
      }
    }
    catch(err){
      console.log(err);
    res.status(500).json({ error: 'Internal server error' });
    }
  })
  router.put('/:id', async(req,res)=>{
    try {
      const personId=req.params.id;
      const UpdatedData=req.body;
      const response =await Person.findByIdAndUpdate(personId,UpdatedData,{
         new:true,
         runValidators:true,
      })
      if(!response){
         return res.status(404).json({error:`Person not found`})
      }
      console.log("done updated");
      res.status(200).json(response);
    } 
    catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
 router.delete('/:id',async(req,res)=>{
  try {
    const personId=req.params.id;
    const deleteItem= await Person.findByIdAndDelete(personId); 
    if(!deleteItem){
      return res.status(404).json({error:`Person not found`})
   }
   console.log("done deleted");
   res.status(200).json(deleteItem);
  
  }  catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
 })





module.exports=router;

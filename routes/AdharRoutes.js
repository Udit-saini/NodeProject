const express=require('express');
const router =express.Router();

const Adhar=require('./../models/Adhar')

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const newResponse=new Adhar(data);
    const response= await newResponse.save()
    console.log("data saved");
    res.status(200).json(response);
    }
    catch(err){
        res.status(500).json({err:`internnal error occur`})
    }
})

router.get('/',async(req,res)=>{
    try{
       const data=await Adhar.find();
       console.log("data found and fetched");
       res.status(200).json(data);
       
    }
    catch(err){
        res.status(500).json({err:`internal error occur`})
    }
})

router.get('/:workType', async(req,res)=>{
    try {
        const workType=req.params.workType;
        if (workType=='student'||workType=='Job'||workType=='unemployed') {
        const response=await Adhar.find({profession:workType});
        console.log("done");
        res.status(200).json(response);
            
        }
        else{
            res.status(500).json({error:`internal error`})
          }
    } catch (err) {
         res.status(500).json({err:`internal error occur`})
    }
})

module.exports=router;

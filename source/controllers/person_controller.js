const Person =require("../models/person")
const Address =require('../models/address')
const appConst =require('../routers/constants')

const add =async (req,res) => {
    try {
       
        const resp = await Person.create(req.body,
        {
        include: [{
            model:Address}]});
            
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:"success"
        })
        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed!..."

        })               
    }
}
 const findEmp =async(req,res) =>{
    try {
        const resp =await Person.findOne({ id: req.params.id })
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:'success'
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed!..."       
    })
    }
}
const findall =async(req,res) =>{
    try{
        const resp = await Person.findAll()
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:'success'
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed!..."       
    })
    }
}
const updateRecord =async(req,res) =>{
    try{
        
        const resp = await Person.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        console.log(resp)
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:"success"
        })      
    } catch (error) {     
      console.log(error.message);
      res.status(400).json({
        status:appConst.status.fail,
        response:null,
        message:"failed!..."
      }) 
    }
  
    }
    const deleteRecord=async(req,res)=>{
        try
        {
        const resp = await Person.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json({
            status:appConst.status.success,
            response:resp,
            message:'success'})
        }
        catch(err)
        {
        res.status(400).json({
            status:appConst.status.fail,
            response:null,
            message:err.message})
        }
  }
  const bulkDataCreation =async(req,res)=>{
    try {
        const resp = await Person.bulkCreate(req.body,{
                include: [{
                    model:Address}]});
                    
                res.status(202).json({
                    status:appConst.status.success,
                    response:resp,
                    message:"success"
                })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status:appConst.status.success,
            response:null,
            message:"failed!.."
        })
        
    }
  }
  const bulkUpdateRecords = async (req,res) =>{
    try {
        const resp = await Person.update(req.body,{
            where:{
                id:req.body.id
            }
        })
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:"success"
        })
    } catch (error) {
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"failed!..."
        })
        
    }
  }

module.exports ={add,findEmp,findall,updateRecord,deleteRecord,bulkDataCreation,bulkUpdateRecords}
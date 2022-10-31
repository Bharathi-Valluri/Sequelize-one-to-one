const address= require('../models/address')
const person=require('../models/person')
const appConst=require('../routers/constants')
const findRecord =async(req,res) =>{
    try {
        const resp =await address.findOne({ id: req.params.id })
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
const findAllRecords =async(req,res) =>{
    try{
        const resp = await address.findAll()
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
const updateAddress = async(req,res) =>{
    try {
        const resp = await address.update(req.body,{
            where :{
                id : req.params.id
        }
        })
        console.log(resp)
        res.status(202).json({
            status:appConst.status.success,
            response:resp,
            message:'success'
        
    })
    }catch (error) {
        console.log(error.message)
        res.status(404).json({
            status:appConst.status.fail,
            response:null,
            message:"Failed!...."
        })
        
    }
}
const deleteAddress=async(req,res)=>{
    try
    {
    const resp = await address.destroy({
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
module.exports ={findRecord,findAllRecords,updateAddress,deleteAddress}

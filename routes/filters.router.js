const express = require("express");
const router = express.Router();
const Name = require("../models/childNames.model");
const FiltersList = require("../models/filtersList.model");

router.get('/',async(req,res)=>{
    try{
        const filtersList= await FiltersList.findById("62e037c03a8df2a1e39928b7")
        res.send(filtersList)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router
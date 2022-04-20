const express = require("express")
const router = new express.Router();

const mensRanking = require("../models/mens");

/*
  create --> post
  read   --> get
  update --> put patch
  delete --> delete

*/


//we will handle post req

router.post("/mens", async(req,res) => {
    try{
      const addMenRec = new mensRanking(req.body);
      const insertMens = await addMenRec.save();
      res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})


router.get("/mens", async(req,res) => {
    try{
      const getMens = await mensRanking.find({}).sort({"ranking":1})
      res.status(201).send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

//read individual item
router.get("/mens/:id", async(req,res) => {
    try{
      const _id = req.params.id;
      const getMensInd = await mensRanking.findById(_id)
      res.status(201).send(getMensInd);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch("/mens/:id", async(req,res) => {
    try{
      const _id = req.params.id;
      const updateMensInd = await mensRanking.
                           findByIdAndUpdate(_id,req.body,{
                               new:true
                           })
      res.status(201).send(updateMensInd);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/mens/:id", async(req,res) => {
    try{
      const _id = req.params.id;
      const deleteMensInd = await mensRanking.
                           findByIdAndDelete(_id)
      res.status(201).send(deleteMensInd);
    }catch(e){
        res.status(500).send(e);
    }
})


module.exports = router;
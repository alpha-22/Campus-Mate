const express = require("express");
const router = express.Router();
const { StudentLogin } = require("../models");

router.post("/get", async (req, res) => {
  const info=await StudentLogin.findOne({where:{
    Sid:req.body.Sid,Password:req.body.Password
  }});
  res.json(info);
});

router.post("/input", async (req, res) => {
  const info = req.body;
  await StudentLogin.create(info);
  res.json(info);
});


module.exports = router;
const express = require("express");
const router = express.Router();
const { Studenti,SubjectSem } = require("../models");
const Sequelize = require('sequelize');

router.post(`/get`, async (req, res) => {
  console.log("server")
  console.log(req.body.headers.Sid)
  const info=await Studenti.findOne({where:{
    Sid:req.body.headers.Sid
  }});
  res.json([info]);
});

router.post("/post", async (req, res) => {
  const info = req.body;
  await Studenti.create(info);
  res.json(info);
});
router.post("/update", async (req, res) => {
  const info = req.body;
  const newInfo={};
  if (info.Sid) { newInfo.Sid = info.Sid };
  if (info.Name) { newInfo.Name = info.Name };
  if (info.Sem) { newInfo.Sem = info.Sem };
  if (info.SUB1) { newInfo.SUB1 = info.SUB1 };
  if (info.SUB2) { newInfo.SUB2 = info.SUB2 };
  if (info.SUB3) { newInfo.SUB3 = info.SUB3 };
  if (info.SUB4) { newInfo.SUB4 = info.SUB4 };
  if (info.SUB5) { newInfo.SUB5 = info.SUB5 };

  await Studenti.update(newInfo,{where:{Sid:info.Sid}});
  await SubjectSem.decrement({Seats:1},{where:{[Sequelize.Op.or]:[{SubCode:info.SUB1},{SubCode:info.SUB2},{SubCode:info.SUB3},{SubCode:info.SUB4},{SubCode:info.SUB5}]}})
});
router.post("/switch", async (req, res) => {
  const info = req.body.info;
  console.log(req.body.info)
  const pastinfo=req.body.pastsub;
  console.log(req.body.pastsub)
  const newInfo={};
  if (info.SUB1) { newInfo.SUB1 = info.SUB1
    await SubjectSem.decrement({Seats:1},{where:{SubCode:info.SUB1}})
    await SubjectSem.increment({Seats:1},{where:{SubCode:pastinfo.SUB1}}) };
  if (info.SUB2) { newInfo.SUB2 = info.SUB2 
    await SubjectSem.decrement({Seats:1},{where:{SubCode:info.SUB2}})
    await SubjectSem.increment({Seats:1},{where:{SubCode:pastinfo.SUB2}})};
  if (info.SUB3) { newInfo.SUB3 = info.SUB3 
    await SubjectSem.decrement({Seats:1},{where:{SubCode:info.SUB3}})
    await SubjectSem.increment({Seats:1},{where:{SubCode:pastinfo.SUB3}})};
  if (info.SUB4) { newInfo.SUB4 = info.SUB4 
    await SubjectSem.decrement({Seats:1},{where:{SubCode:info.SUB4}})
    await SubjectSem.increment({Seats:1},{where:{SubCode:pastinfo.SUB4}})};
  if (info.SUB5) { newInfo.SUB5 = info.SUB5 
    await SubjectSem.decrement({Seats:1},{where:{SubCode:info.SUB5}})
    await SubjectSem.increment({Seats:1},{where:{SubCode:pastinfo.SUB5}})};

  await Studenti.update(newInfo,{where:{Sid:info.Sid}});
  
});
module.exports = router;
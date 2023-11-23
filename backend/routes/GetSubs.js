const express = require("express");
const router = express.Router();
const { SubjectSem } = require("../models");
const Sequelize = require('sequelize');
router.post("/get", async (req, res) => {
    try {
      const info = await SubjectSem.findAll({
        where: {
          SubCode: {
            [Sequelize.Op.like]: `%${req.body.Subject}%` 
          },
          Sem:req.body.Sem,
          Seats:{
            [Sequelize.Op.gt]: 0
          }
        },
      });
      const disinfo = await SubjectSem.findAll({
        where: {
          SubCode: {
            [Sequelize.Op.like]: `%${req.body.Subject}%` 
          },
          Sem:req.body.Sem,
          Seats:{
            [Sequelize.Op.lte]: 0
          }
        },
      });
      res.json({info,disinfo});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;

router.post("/input", async (req, res) => {
  const info = req.body;
  await SubjectSem.create(info);
  res.json(info);
});


module.exports = router;
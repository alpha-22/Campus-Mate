// routes/timetable.js

const express = require('express');
const router = express.Router();
const { Timetable } = require('../models');

router.get('/api/faculty/:facultyId/timetable', async (req, res) => {
  const facultyId = req.params.facultyId;
  
  try {
    const timetable = await Timetable.findAll({ where: { faculty_id: facultyId } });
    res.json({ timetable });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

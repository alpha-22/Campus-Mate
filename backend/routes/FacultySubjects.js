// routes/subjects.js

const express = require('express');
const router = express.Router();
const { FacultySubjects } = require('../models');

router.get('/:facultyId', async (req, res) => {
  const facultyId = req.params.facultyId;
  
  try {
    const subjects = await FacultySubjects.findAll({ where: { faculty_id: facultyId } });
    res.json({ subjects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

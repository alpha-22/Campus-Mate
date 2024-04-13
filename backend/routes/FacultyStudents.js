// routes/students.js

const express = require('express');
const router = express.Router();
const { FacultyStudents } = require('../models');

router.get('/:facultyId/:subjectId', async (req, res) => {
  const { facultyId } = req.params;
  
  try {
    const students = await FacultyStudents.findAll({ where: { faculty_id: facultyId } });
    res.json({ students });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

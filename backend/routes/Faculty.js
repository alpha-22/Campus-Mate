// routes/login.js

const express = require('express');
const router = express.Router();
const { Faculty } = require('../models');

router.post('/api/login', async (req, res) => {
  const { faculty_id, password } = req.body;
  
  try {
    const faculty = await Faculty.findOne({ where: { faculty_id, password } });
    
    if (faculty) {
      res.json({ success: true, faculty });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;

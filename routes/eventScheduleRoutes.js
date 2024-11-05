const express = require('express');
const {createEvent}=require('../controllers/eventScheduleController');
const router=express.Router();

// POST /api/register - Register a participant
router.post('/create', createEvent);

module.exports = router;
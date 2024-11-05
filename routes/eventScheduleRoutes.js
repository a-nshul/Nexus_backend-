const express = require('express');
const {createEvent,getAllEvents}=require('../controllers/eventScheduleController');
const router=express.Router();

// POST /api/register - Register a participant
router.post('/create', createEvent);

router.get('/',getAllEvents)
module.exports = router;
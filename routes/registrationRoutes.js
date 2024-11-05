const express = require('express');
const {createRegistration}=require('../controllers/registrationController');
const router=express.Router();

// POST /api/register - Register a participant
router.post('/create', createRegistration);

module.exports = router;
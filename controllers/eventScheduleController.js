const Event = require("../models/eventScheduleModel");
const generateEmailTemplate = require('../utils/emailTemplate');
const transporter = require('../config/email');

const createEvent =async(req,res)=>{
    try {
        const {title, date, description,email}=req.body;

        // Validate required fields
        if(!title ||!date ||!description){
            return res.status(400).json({msg:"All fields are required"});
        }

        // Create a new event
        const newEvent=await Event.create({
            title,
            date,
            description,
            email
        })
       // Send confirmation email
       const emailContent = generateEmailTemplate(title, date, description,email);
       await transporter.sendMail({
           from: process.env.EMAIL_USER, // Use the email from .env
           to: email,
           subject: 'Registration Confirmation for GWECCC 2025',
           html: emailContent,
       });

        res.status(201).json({msg:"Event created successfully", newEvent});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

module.exports={createEvent};
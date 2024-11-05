const Register = require("../models/registrationModel");

const createRegistration = async (req, res) => {
    try {
        const { name, email, contact, organisation, delegates } = req.body;

        // Validate required fields
        if (!name || !email || !contact || !organisation || !delegates) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Check for existing user
        // const existingUser = await Register.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ msg: "User already exists" });
        // }

        // Create new registration
        const registration = await Register.create({
            name,
            email,
            contact,
            organisation,
            delegates
        });

        // Return the created registration with a success message
        res.status(201).json({ registration, msg: "Registration created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createRegistration };

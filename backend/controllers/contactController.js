const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create contact message
const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Save to database
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    
    // Send email notification (optional)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`
      });
    }
    
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all contacts (admin only)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContact, getContacts };
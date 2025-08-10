const express = require('express');
const { createContact, getContacts } = require('../controllers/contactController');

const router = express.Router();

router.post('/', createContact);
router.get('/', getContacts);

module.exports = router;
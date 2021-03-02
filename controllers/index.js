const router = require('express').Router();

const contactRoutes = require('./contactsController');

router.use('/api/contacts', contactRoutes)

module.exports = router;

const express = require('express');
const auth = require('../controllers/auth');


const router = express.Router();

// Route For Signing Up
router.post('/signup', auth.signup);

// Log In To Site
router.post('/login', auth.login);

// Log Out 
router.get('/logout', auth.logout)


// Export Router
module.exports = router;
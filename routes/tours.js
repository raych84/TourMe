const express = require('express');
const tours = require('../controllers/tour');
const auth = require('../controllers/auth');


const router = express.Router();

router.route('/')
	.get(tours.getAll) // Get all tours
	.post(auth.protect, tours.create) // Create a Tour
;

router.route('/:slug')
	.get(tours.getOne) // Get a specific tour
	.patch(tours.update) // Update a specific tour
	.delete(tours.delete) // Delete a specific tour
;

module.exports = router;
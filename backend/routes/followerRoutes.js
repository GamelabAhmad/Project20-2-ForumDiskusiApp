// routes/followerRoutes.js
const express = require('express');
const followerController = require('../controller/followerController');
const cekFollowerExistence = require('../middleware/cekFollower'); // Import middleware

const router = express.Router();

// Routes
router.post('/followers', followerController.createFollower);
router.get('/followers', followerController.getAllFollowers);
router.get('/followers/:id', cekFollowerExistence, followerController.getFollowerById); // Menggunakan middleware cekFollowerExistence sebelum getFollowerById
router.put('/followers/:id', cekFollowerExistence, followerController.updateFollower); // Menggunakan middleware cekFollowerExistence sebelum updateFollower
router.delete('/followers/:id', cekFollowerExistence, followerController.deleteFollower); // Menggunakan middleware cekFollowerExistence sebelum deleteFollower

module.exports = router;

// middleware/cekFollower.js
const Follower = require('../models/follower'); // Import model Follower

const cekFollowerExistence = async (req, res, next) => {
  const id = req.params.id;
  try {
    const follower = await Follower.findById(id);
    if (!follower) {
      return res.status(404).json({ message: 'Follower not found' });
    }
    req.follower = follower; // Menyimpan data follower ke dalam objek request untuk digunakan di endpoint berikutnya
    next();
  } catch (err) {
    console.error('Error checking follower existence:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = cekFollowerExistence;

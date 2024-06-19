// controllers/followerController.js
const Follower = require('../models/follower');

exports.createFollower = (req, res) => {
  const followerData = req.body;
  Follower.create(followerData, (err, result) => {
    if (err) {
      console.error('Failed to add follower:', err);
      return res.status(500).send('Failed to add follower');
    }
    res.status(201).send('Follower added successfully');
  });
};

exports.updateFollower = (req, res) => {
  const id = req.params.id;
  const followerData = req.body;
  Follower.update(id, followerData, (err, result) => {
    if (err) {
      console.error('Failed to update follower:', err);
      return res.status(500).send('Failed to update follower');
    }
    res.status(200).send('Follower updated successfully');
  });
};

exports.deleteFollower = (req, res) => {
  const id = req.params.id;
  Follower.delete(id, (err, result) => {
    if (err) {
      console.error('Failed to delete follower:', err);
      return res.status(500).send('Failed to delete follower');
    }
    res.status(200).send('Follower deleted successfully');
  });
};

exports.getFollowerById = (req, res) => {
  const id = req.params.id;
  Follower.findById(id, (err, follower) => {
    if (err) {
      console.error('Failed to get follower:', err);
      return res.status(500).send('Failed to get follower');
    }
    res.status(200).json(follower);
  });
};

exports.getAllFollowers = (req, res) => {
  Follower.findAll((err, followers) => {
    if (err) {
      console.error('Failed to get followers:', err);
      return res.status(500).send('Failed to get followers');
    }
    res.status(200).json(followers);
  });
};

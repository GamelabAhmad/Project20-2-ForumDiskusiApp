const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const User = require("../models/user");
const jwt = require('jsonwebtoken');

cloudinary.config({
  cloud_name: 'dmz1k0k6x',
  api_key: '675575814148746',
  api_secret: '4pWke083UuZW33-ttZXnQ2ZtlSU'
});

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const userData = req.body;

  try {
    if (userData.password) {
      const saltRounds = 10;
      userData.password = await bcrypt.hash(userData.password, saltRounds);
    }
    if (userData.picture) {
      const uploadResult = await cloudinary.uploader.upload(userData.picture);
      userData.picture = uploadResult.secure_url;
    }
    const result = await User.update(id, userData);
    res.status(200).send("User updated successfully");
  } catch (err) {
    console.error("Failed to update user:", err);
    res.status(500).send("Failed to update user");
  }
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id)
    .then((result) => {
      res.status(200).send("User deleted successfully");
      User.findAll().then(users => {
        users.forEach((e, i) => {
          if(e.id_user > id) {
            let oldId = e.id_user;
            let newId = e.id_user - 1;
            User.resetId(oldId, newId)
          }
        });
      })
      User.autoInc();
    })
    .catch((err) => {
      console.error("Failed to delete user:", err);
      res.status(500).send("Failed to delete user");
    });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error("Failed to get user:", err);
      res.status(500).send("Failed to get user");
    });
};

exports.getAllUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error("Failed to get users:", err);
      res.status(500).send("Failed to get users");
    });
};
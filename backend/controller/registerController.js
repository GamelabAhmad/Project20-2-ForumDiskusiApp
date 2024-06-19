const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const User = require("../models/user");
const jwt = require("jsonwebtoken");

cloudinary.config({
    cloud_name: "dmz1k0k6x",
    api_key: "675575814148746",
    api_secret: "4pWke083UuZW33-ttZXnQ2ZtlSU",
});

exports.registerUser = async (req, res) => {
    const userData = req.body;

    if (!userData.username || !userData.email || !userData.password) {
        return res.status(400).send("Username, email, and password are required");
    }

    // Hash the password before saving the user
    const saltRounds = 10;
    bcrypt.hash(userData.password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.error("Failed to hash password:", err);
            return res.status(500).send("Failed to hash password");
        }

        // Replace the plain text password with the hashed password
        userData.password = hashedPassword;

        // Upload the picture to Cloudinary if it exists
        if (userData.picture) {
            cloudinary.uploader.upload(userData.picture, (error, result) => {
                if (error) {
                    console.error("Failed to upload picture to Cloudinary:", error);
                    return res.status(500).send("Failed to upload picture");
                }

                // Set the Cloudinary URL in the userData
                userData.picture = result.secure_url;

                // Create the user with the hashed password and Cloudinary URL
                User.create(userData)
                    .then((result) => {
                        res.status(201).send("User added successfully");
                    })
                    .catch((err) => {
                        console.error("Failed to add user:", err);
                        res.status(500).send("Failed to add user");
                    });
            });
        } else {
            // If there's no picture, just create the user
            User.create(userData)
                .then((result) => {
                    res.status(201).send("User added successfully");
                })
                .catch((err) => {
                    console.error("Failed to add user:", err);
                    res.status(500).send("Failed to add user");
                });
        }
    });
};

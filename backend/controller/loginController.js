const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const User = require("../models/user");
const jwt = require('jsonwebtoken');

cloudinary.config({
    cloud_name: 'dmz1k0k6x',
    api_key: '675575814148746',
    api_secret: '4pWke083UuZW33-ttZXnQ2ZtlSU'
});

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check jika user ada
        let user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Email' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        // Create JWT Token
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, 'yourcapisred', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

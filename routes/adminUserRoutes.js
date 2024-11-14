const authMiddleware = require('../middlewares/authMiddleware');
const AdminUser = require('../models/AdminUser');
const router = require('express').Router();
const bcrypt = require('bcrypt');



router.post('/',authMiddleware, async (req, res) => {
    const { email, password } = req.body;

    let adminUser = new AdminUser({
        email,
        password
    });

    await adminUser.save();
    res.json({ id: adminUser._id });

});

module.exports = router;
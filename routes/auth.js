const router = require('express').Router();
const User = require('../models/User');
// const bcrypt = require('bcrypt');

// REGISTER
router.get('/register', async (req, res) => {
  try {
    const user = await new User({
      // username: req.body.username,
      username: 'jobBle',
      // email: req.body.email,
      email: 'joble@mail.com',
      // password: req.body.password,
      password: '987654321'
    });

    await user.save();
    console.log(user);
    res
      .status(200)
      .send('Registered User with API AUTH Route');
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }

}); // GET /api/auth

module.exports = router;
// export default router;
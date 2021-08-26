const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// REGISTER
router.post('/register', async (req, res) => {

  try {
    // generate a salty password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save the user and respond
    const user = await newUser.save();
    console.log(user);
    res.status(200)
      // .json({ message: 'Registered User with API AUTH Route', user: user._id });
      .json(user);
  } catch (err) {
    res.status(500).json(err);
  }

}); // GET /api/auth


// LOGIN
router.post('/login', async (req, res) => {
  try {
    // find the user
    const user = await User.findOne({ email: req.body.email });

    // check if the user exists
    !user && res.status(404).json('User not found');


    // check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(400).json('Invalid Password');

    // respond with the user
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
}); // GET /api/auth/login

module.exports = router;
// export default router;
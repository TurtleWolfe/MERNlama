const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  //          user name
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true
  },          // user name

  //          email
  email: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true
  },          // email

  //          password
  password: {
    type: String,
    required: true,
    min: 6,
    // max: 20
  },          // password

  //         profile picture
  profilePicture: {
    type: String,
    default: 'https://i.picsum.photos/id/629/200/300.jpg?hmac=YTSnJIQbXgJTOWUeXAqVeQYHZDodXXFFJxd5RTKs7yU'
  },         // profile picture

  //        cover picture
  coverPicture: {
    type: String,
    default: 'https://i.picsum.photos/id/529/200/300.jpg?hmac=WqdWbOIAJ1H2q4r92Fc4KXM--xvRadidXmV5P2R1rDg'
  },        // cover picture

  //    followers
  followers: [{
    type: Array,
    default: [],
    // ref: 'User',
  }], // followers

  //     following
  followings: [{
    type: Array,
    default: [],
    // ref: 'User',
  }], // following

  // posts
  posts: [{
    type: Array,
    default: [],
    // ref: 'Post',
  }],  // posts

  //     is Admin
  isAdmin: {
    type: Boolean,
    default: false
  },  // is Admin

  //    description
  description: {
    type: String,
    default: '',
    max: 200
  },  // description

  //        city
  city: {
    type: String,
    default: '',
    max: 50
  },  //    city

  //       country
  country: {
    type: String,
    default: '',
    max: 50
  },  //    country

  //        from
  from: {
    type: String,
    default: '',
    max: 50
  },  //    from

  //       relationship
  relationship: {
    type: String,
    enum: [
      'single',
      'in a relationship',
      'engaged',
      'married',
      'complicated',
      'open relationship',
      'widowed',
      'separated',
      'divorced'
    ],
  },  //    relationship

  //        website
  website: {
    type: String,
    default: '',
    max: 50
  },  //    website

  //is verified  (email)
  isVerified: {
    type: Boolean,
    default: false
  },  //    is verified

  //        is blocked
  isBlocked: {
    type: Boolean,
    default: false
  },  //    is blocked

},
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
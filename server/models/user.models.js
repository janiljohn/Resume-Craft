const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    graduationDate: {
      type: String,  // or Date if you want to use actual Date objects
      required: true
    },
    major: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  });

// const User = new mongoose.Schema(
//     {
//     name: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     password: {type: String, required: true},
//     quote: {type: String},
//     university: {
//         type: [universitySchema]
//     }
//     }, 
//     { collection: 'user-data' }
// )

const User = new mongoose.Schema(
  {
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  quote: {type: String},
  university: {type: String}
  }, 
  { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model
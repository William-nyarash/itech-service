const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    admissionNumber:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type:String,
        enum:['member', 'club lead'],
        default:"member"
    },
    club:{
        type:String
    },
},
{timestamps:true}
)

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password; 
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
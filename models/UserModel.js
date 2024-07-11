const { Schema, model } = require("mongoose")
var validator = require("validator")

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "UserName is required"],
        min: [3, "Username must be 3 chracters."],
        unique: true
    },
    name: {
        type: String,
        //required: [true, "Name  is required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    surname: {
        type: String,
        //required: [true, "Surname is required"],
        minlength: [3, "Surname must be 3 chracters."],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    email: {
        type: String,
        required: [true, "eMail is required"],
        unique: true,
        validator: {
            validator: validator.isEmail,
            message: 'Email is invalid',
        }
    },
    phonenumber: {
        type: String,
        //required: [true, "Phone Number is required"],
        //telefon numarası yapısı doğru mu
        // //validate: {
        //     validator: (phoneNumber) => validator.isMobilePhone(phoneNumber, 'tr-TR'),
        //     message: "Phonenumber is Invalid"
        // },
        //telefon numarası kişiye özel olduğundan benzersiz mi kontrolü
        unique: true
    },
})

const User = model('User',UserSchema)
module.exports = User
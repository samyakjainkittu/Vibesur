const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobno: {
        type: String,
        required: true,
        unique: true
    },
    passward: {
        type: String,
        required: true,
    },
    confpassward: {
        type: String,
        required: true,
    }


})








usersSchema.pre("save", async function (next) {

    if (this.isModified("passward")) {
        this.passward = await bcrypt.hash(this.passward, 10);
        this.confpassward  = undefined;
    }
    next();
})


const Register = new mongoose.model("Register_User", usersSchema);

module.exports = Register;
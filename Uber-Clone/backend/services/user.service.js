const userModel = require('../models/user.model');

module.exports.createUser = async ({firstname, lastname, email, password}) => {
    if (!firstname || !lastname || !email) {
        throw new Error("All fields are required");
    }

    const user = new userModel({
        fullname: {
            firstname: firstname,
            lastname: lastname
        },
        email,
        password
    });

    return user;
}
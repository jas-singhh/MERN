const driverModel = require('../models/driver.model');

module.exports.createDriver = async ({fullname, email, password, vehicle}) => {
    if (!fullname || !email || !password || !vehicle) {
        throw new Error("All fields are required");
    }

    const driver = await driverModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle
    });

    return driver;
}
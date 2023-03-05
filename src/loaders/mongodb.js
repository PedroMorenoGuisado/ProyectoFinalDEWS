const mongoose = require('mongoose');

module.exports = async config => {
    console.log(config)
    await mongoose.connect(config.url);
    console.log("Mongodb connected");
}
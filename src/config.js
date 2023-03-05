require('dotenv').config();

const app = {
port: process.env.PORT,
};

const config = {
app,
mongodb: {
    url: process.env.MONGODB_URL,
}
};

module.exports = config;
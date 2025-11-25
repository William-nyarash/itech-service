require('dotenv').config()

const env = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,
}

module.exports = env;

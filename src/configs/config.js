require('dotenv').config();

const config = {}; 
config.app = {
    appName: 'Corredor de bolsa',
}

config.server = {
    port: process.env.PORT || 3000,
};

module.exports = config;
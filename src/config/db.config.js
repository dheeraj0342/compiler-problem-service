const mongoose = require('mongoose');
const { ATLAS_DB_URL ,NODE_ENV} = require('./server.config');

async function connectToDatabase(){
    try {
        await mongoose.connect(ATLAS_DB_URL);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database');
        console.error(error);
    }
}

module.exports = connectToDatabase;
const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routers');

const {PORT} = require('./config/server.config.js');
const errorHandler = require('./utils/errorhandler.js');
const connectToDatabase = require('./config/db.config.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use('/api',apiRouter)

app.get('/ping', (req, res) => {
    return res.send('Hello World!');
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToDatabase();
    console.log('Connected to database');
});


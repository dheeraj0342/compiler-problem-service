const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routers');

const {PORT} = require('./config/server.config.js');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use('/api',apiRouter)

app.get('/ping', (req, res) => {
    return res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


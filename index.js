const express = require('express');
const app = express();
__path = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;

let code = require('./pair'); // Only keeping pair

require('events').EventEmitter.defaultMaxListeners = 500;

// Only keeping the /code route
app.use('/code', code);

// Default route will show pair.html
app.use('/', async (req, res, next) => {
    res.sendFile(__path + '/pair.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star GHAFFAR-MD

 Server running on http://localhost:` + PORT);
});

module.exports = app;

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Setting up Travis CI for my mini node project');
});

const server = app.listen(3000, function() {
    console.log('Listening on port 3000');
})

module.exports = server;
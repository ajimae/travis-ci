const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('ci with travis.');
});

const server = app.listen(3000, function() {
    console.log('Listening on port 3000');
})

// function stop() {
//     server.close();
// }

module.exports = server;
// module.exports.stop = stop;
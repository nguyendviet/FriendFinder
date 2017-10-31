var friends = require('../data/friends');

function apiHandler(app) {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        friends.push(req.body);
        res.json(true);

        // compatibility logic
    });
}

module.exports = apiHandler;
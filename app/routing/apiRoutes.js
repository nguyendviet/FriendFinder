var friends = require('../data/friends');

function apiHandler(app) {

    // show list of current friends
    app.get('/api/friends', (req, res) => {
        console.log(req);
        console.log(res);
        // send friends json
        res.json(friends);
    });

    // add new friend
    app.post('/api/friends', (req, res) => {
        friends.push(req.body);
        res.json(true);

        // compatibility logic
    });
}

module.exports = apiHandler;
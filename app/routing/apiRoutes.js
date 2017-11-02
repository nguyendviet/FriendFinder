var friends = require('../data/friends');

function apiHandler(app) {

    // show list of current friends
    app.get('/api/friends', (req, res) => {
        // send friends json
        res.json(friends);
    });

    // add new friend
    app.post('/api/friends', (req, res) => {

        var newScores = req.body.scores;

        for (i = 0; i < newScores.length; i++) {
            console.log('\n==============\nQuestion ' + (i + 1) + '\n');
            console.log('You chose: ', newScores[i]);

            for (j = 0; j < friends.length; j++) {
                console.log(friends[j].name + ' chose: ' + friends[j].scores[i]);
            }
        }

        friends.push(req.body);
        res.json(true);
    });
}

module.exports = apiHandler;
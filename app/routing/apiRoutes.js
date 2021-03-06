var friends = require('../data/friends');

function apiRoute(app) {

    // show list of current friends
    app.get('/api/friends', (req, res) => {
        // send friends json
        res.json(friends);
    });

    // add new friend
    app.post('/api/friends', (req, res) => {

        // handle compatibility
        var newScores = req.body.scores;
        var friendDiff = {}; // stores all differences and names

        console.log('body: ', req.body);

        console.log('scores received: ', newScores);

        // check all friends
        for (var i = 0; i < friends.length; i++) {
            console.log('\n===========\n' + friends[i].name + ' scores: ');
            
            var totalDiff = 0;

            // check all answers
            for (var j = 0; j < friends[i].scores.length; j++) {
                console.log('\nQuestion ' + (j + 1) + ': ' + friends[i].scores[j]);
                console.log('Your answer: ' + newScores[j]);

                // get the difference between new answer and friend's answer
                var diff = Math.abs(newScores[j] - friends[i].scores[j]);
                
                console.log('Your difference for this question is: ', diff);

                // add all differences
                totalDiff += diff;
            }

            console.log('Your total difference is: ', totalDiff);

            // store friends' names and differences in an object by difference order (if same difference, latter name displayed)
            friendDiff[totalDiff] = friends[i].name;
        }

        // log list of all friends and differences
        console.log(friendDiff);

        // name of best match
        console.log('\n========\nYour best friend is: ', friendDiff[Object.keys(friendDiff)[0]]);

        var chosenName = friendDiff[Object.keys(friendDiff)[0]];
        var bestFriend = {};

        for (var i = 0; i < friends.length; i++) {
            if (chosenName === friends[i].name) {
                bestFriend.name = friends[i].name;
                bestFriend.photo = friends[i].photo;
            }
        }

        friends.push(req.body);
        res.json(bestFriend);
    });
}

module.exports = apiRoute;
var friends = require('../data/friends');

function apiHandler(app) {

    // show list of current friends
    app.get('/api/friends', (req, res) => {
        // send friends json
        res.json(friends);
    });

    // add new friend
    app.post('/api/friends', (req, res) => {

        // handle compatibility
        var newScores = req.body.scores;
        var friendDiff = {};

        // check all friends
        for (i = 0; i < friends.length; i++) {
            console.log('\n===========\n' + friends[i].name + ' scores: ');
            
            var totalDiff = 0;

            // check all answers
            for (j = 0; j < friends[i].scores.length; j++) {
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

        var friendName = friendDiff[Object.keys(friendDiff)[0]];
        var friendInfo = {};

        for (i = 0; i < friends.length; i++) {
            if (friendName === friends[i].name) {
                friendInfo.name = friends[i].name;
                friendInfo.photo = friends[i].photo;
            }
        }

        friends.push(req.body);
        res.json(friendInfo);
    });
}

module.exports = apiHandler;
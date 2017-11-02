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

        for (i = 0; i < friends.length; i++) {
            console.log('\n===========\n' + friends[i].name + ' scores: ');
            var totalDiff = 0;

            for (j = 0; j < friends[i].scores.length; j++) {
                console.log('\nQuestion ' + (j + 1) + ': ' + friends[i].scores[j]);
                console.log('Your answer: ' + newScores[j]);

                var diff = Math.abs(newScores[j] - friends[i].scores[j]);
                
                console.log('Your difference for this question is: ', diff);

                totalDiff += diff;
            }

            console.log('Your total difference is: ', totalDiff);
        }

        /* for (i = 0; i < newScores.length; i++) {
            console.log('\n==============\nQuestion ' + (i + 1) + '\n');
            console.log('You chose: ', newScores[i]);

            for (j = 0; j < friends.length; j++) {
                console.log(friends[j].name + ' chose: ' + friends[j].scores[i]);
                var diff = Math.abs(newScores[i] - friends[j].scores[i]);

                console.log('Your difference is: ', diff);
            }
        } */
         
        friends.push(req.body);
        res.json(true);
    });
}

module.exports = apiHandler;
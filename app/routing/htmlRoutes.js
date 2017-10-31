var path = require('path');

function pageHandler(app) {
    // go to survey page
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // default case: go to home page
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
}

module.exports = pageHandler;
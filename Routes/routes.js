const account = require ('./account');

module.exports = (app) => {

    app.post('/signin', account.login);

    app.post('/signup', account.signup);
}
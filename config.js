require("dotenv").config();

module.exports = {
    'facebookAuth': {
        'clientID': process.env.FACEBOOK_APP_ID,
        'clientSecret': process.env.FACEBOOK_CLIENT_SECRET,
        'callbackURL': process.env.CALLBACK_URL,
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
    }
}
const express = require('express');
const Router = express.Router();
const mailer = require('../middleware/mailer');
const Quote = require('../models/Quote')

Router.get('/quotes', (req, res) => {
	Quote.find()
		.then((quotes) => res.json(quotes))
		.catch((error) => res.sendStatus(500).json({ error: error.message }));
});

Router.post('/freequote', (req,res, next) => {
    console.log(req.body)
    mailer(req, res)
    Quote.create(req.body)
        .then((quote) => {
        res.send(quote);
        })
        .catch((error) => res.sendStatus(500).json({ error: error.message }));
    console.log('Your expression of interest has been submitted successfully.')
})

module.exports = Router;
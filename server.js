// dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');

// connect to mlab
const dbConn = require('./config/keys').mongoURI;

app.use(cors());

// allows CORS
app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// parse application/json - must be defined before all other routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// must be defined after body parser
app.use(routes);

app.use('/services', require('./routes/api/services'));

//mongoose
mongoose.connect(dbConn, (err) => {
	if (err) {
		console.log('Error connecting to database', err);
	} else {
		console.log('Connected to database!');
	}
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.get;
}

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(process.env.PORT || 5000, () => console.log('Listening on http://localhost:5000'));

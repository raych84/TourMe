// Import NPM Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');


// Import Routers
const authRouter = require('./routes/auth');
const tourRouter = require('./routes/tours');


// Create App
const app = express();


// Enable Trust Proxy
app.enable('trust-proxy');


// Parsing & Security Middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(helmet());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(compression());


// Define Our Routers
app.use('/auth', authRouter);
app.use('/api/tours', tourRouter);


// Enable Public Directory
app.use('/', express.static(__dirname + '/client/build'));

app.all('*', (req, res) => res.sendFile(__dirname + '/client/build/index.html'));


// Export App
module.exports = app;
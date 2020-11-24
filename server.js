// Import Mongoose
const mongoose = require('mongoose');

// Configure Enviornment
require('dotenv').config({ path: './config.env' });

// Import App
const app = require('./app');

// Handle Uncaught Exceptions
process.on('uncaughtException', err => {
	console.log('🔥 UNCAUGHT EXCEPTION! Shutting down application!');
	console.log(err.name, err.message);
	process.exit();
});



// Initialize DB Connection
const dbConnectionString = process.env.DB_CONNECTION.replace('<password>', process.env.DB_PASSWORD).replace('<dbname>', process.env.DB_NAME).replace('<username>', process.env.DB_USERNAME);

mongoose.connect(dbConnectionString, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => console.log('DB Connection Successful'))
	.catch(err => console.log(err));


const PORT = process.env.PORT || 4001;

const server = app.listen(PORT, () => console.log(`App running on port ${PORT}`));

process.on('unhandledRejection', err => {
	console.log('🔥 UNCAUGHT REJECTION! Shutting down application!');
	console.log(err.name, err.message);
	server.close(() => process.exit(1))
});

process.on('SIGTERM', () => {
	console.log('SIGTERM Recieved. Shutting down application.');
	server.close(() => console.log('Application shut down'))
})
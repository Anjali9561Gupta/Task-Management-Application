const cors = require('cors');
require('dotenv').config(); 
const express = require('express');
const app = express();

// Import database connection
require('./database/db.js'); 

// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');

// Import middleware
const morgan = require('morgan');

// Use middleware
app.use(cors()); // CORS middleware for handling cross-origin requests
app.use(morgan('dev')); // Morgan middleware for logging HTTP requests
app.use(express.json()); // Middleware for parsing JSON request bodies

// Define routes
app.use('/auth', authRoutes); // Routes for authentication
app.use('/task', taskRouter); // Routes for tasks

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT ; // Port configuration from environment variables
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Consistent log message
});
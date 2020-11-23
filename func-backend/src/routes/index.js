const express = require('express');

// Import our custom middlewares (pageNotFound and errorHandler)

// Routes
const { userRoutes } = require('./index.routes');

const router = express.Router();

// Use middlewares
router.use(express.json());

router.use('/users', userRoutes);


// Use custom middleware
// router.use();

module.exports = router;

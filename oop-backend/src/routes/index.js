const express = require('express');

// Import our custom middlewares (pageNotFound and errorHandler)

// Routes
const { UserRoutes } = require('./index.routes');

const router = express.Router();

// Use middlewares
router.use(express.json());

router.use('/users', UserRoutes);


// Use custom middleware
// router.use();

module.exports = router;


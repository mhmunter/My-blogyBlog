
const router = require('express').Router();

const userRoutes = require('./post-routes.js');

router.use('/users', userRoutes);

module.exports = router;
const express = require('express');

const jobsController = require('../controllers/jobs-controller');

const router = express.Router();

router.get('/getOpenJobsInfos/:companyName', jobsController.getOpenJobsInfos);

module.exports = router;
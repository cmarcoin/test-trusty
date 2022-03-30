const express = require('express')
const bodyParser = require('body-parser')

const jobsRoutes = require('./routes/jobs-routes')

const app = express()

app.use('/api/jobs/', jobsRoutes)

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.json({message: error.message || 'Erreur inconnue'});
});

app.listen(5000);
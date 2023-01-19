// CONFIGURATION
const app = require('./config/express');

// ROUTES
const sampleRoutes = require('./routes/sample.routes');

// DATABASE CONNECTION
const { connectDb } = require('./database/databaseConnection');

// ROUTES
app.use('/api', sampleRoutes);

connectDb()
  .then((connection) => {
    app.listen(process.env.LOCAL_PORT || 5000, async () => {
      console.log({
        message: `Server is running on port ${process.env.LOCAL_PORT || 5000}`,
        environment: process.env.ENVIRONMENT,
        connection: connection.message,
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

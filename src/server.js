// separate server js file so we can test our app.js via unit tests
const app = require('./app.js');
const port = process.env.PORT || 3000;

server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

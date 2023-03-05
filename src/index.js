//const { logger } = require('./utils');
const app = require('./app');
const config = require('./config');

const { port } = config.app;

app.listen(port, err => {
if (err) {
 console.error(err);
 return;
}
console.log(`App listening on port ${port}!`);
});
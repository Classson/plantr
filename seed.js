const db = require('./models');

db.sync({force: true})
.then(() => {
  console.log('db synced');
})
.catch(err => {
  console.log(err.stack);
})
.finally(() => {
  db.close();
})

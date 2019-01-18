const db = require('./models');

// const carrot1 = db.Vegetable.create( {
//   name: 'carrot',
//   color: 'orange'
// })

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


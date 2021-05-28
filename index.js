// Run `node index.js` in the terminal
let express = require('express');
const app = express();

const port = 3000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  //res.render('app');
  res.send({ message: 'hello world' });
});
app.listen(port, () => {
  console.log('server listening to port 3000');
});

console.log(`Hello Node.js v${process.versions.node}!`);

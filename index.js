const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/new', (req, res) => {
  res.render('pages/new');
});

app.listen(PORT, () => {
  console.log('listening on http://localhost:' + PORT);
});

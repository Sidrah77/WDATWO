const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

var indexRouter = require('./routes/index');

// Use the index router for each page
app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/projects', indexRouter);
app.use('/contact', indexRouter);

app.listen(port, () => {
  console.log(`Portfolio site running at http://localhost:${port}`);
});

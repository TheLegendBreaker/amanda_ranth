let express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'pug');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/page', function (req, res) {
  res.render('page')
});

app.listen(3001,()=> {
	console.log('listening on port 3001');
});

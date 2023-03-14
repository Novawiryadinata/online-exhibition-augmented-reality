const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.PORT || 8080;

// router.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname , '/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

// router.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname , '/about.html'));
// });

app.set("/", "html");
app.set("/about", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/arbdsall', (req, res) => {
  res.render('arbdsall.html');
});

app.get('/arbds1', (req, res) => {
  res.render('arbds1.html');
});
app.get('/arbds2', (req, res) => {
  res.render('arbds2.html');
});
app.get('/arbds3', (req, res) => {
  res.render('arbds3.html');
});
app.get('/arbds4', (req, res) => {
  res.render('arbds4.html');
});
app.get('/arbds5', (req, res) => {
  res.render('arbds5.html');
});
app.get('/arbds6', (req, res) => {
  res.render('arbds6.html');
});
app.get('/arbds7', (req, res) => {
  res.render('arbds7.html');
});
app.get('/arbds8', (req, res) => {
  res.render('arbds8.html');
});
app.get('/arbds9', (req, res) => {
  res.render('arbds9.html');
});
app.get('/arbds10', (req, res) => {
  res.render('arbds10.html');
});
app.get('/arbds21', (req, res) => {
  res.render('arbds21.html');
});

//add the router
app.use('/', router);

app.listen(port, () => {
  console.log('listening on http://localhost:8080');
})
// app.listen(process.env.port || 3000);

// console.log('Running at Port 3000');
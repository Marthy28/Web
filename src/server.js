const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()
const models = require('./models/index');

// Decode json and x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'pug');

// Add a bit of logging
app.use(morgan('short'))

  app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.post('/addmonkey', function(req, res){
  models.singes.create({
    Nom : req.body.Nom,
    Race : req.body.Race,
    Age : req.body.Age
  })
  .then(()=> {
    res.send('Monkey added ! ')
  })
})


app.get('/singes', function(req, res) {
   models.singes.findAll() 
   .then ((singe) => {
      res.render( 'index', { title : 'Singes',message : "singes", singes : singe })
   })
})

// Get all the users defined
/*app.get('/', function (req, res) {
  models.User.findAll()
    .then((users) => {
      res.json(users)
    })
})

// Add a new user to the database
app.post('/', function(req, res) {
  models.User.create({
    username: req.body.username
  })
    .then(() => {
      res.send('User added !')
    })
})*/

// Synchronize models
models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   *
   * Listen only when database connection is sucessfull
   */
    app.listen(/*process.env.PORT*/3000, function() {
    console.log('Express server listening on port 3000');
  })
});

  /*app.get('/',function(req,res){
    res.send("Hello World !")
  })*/



//});
/* ceci est un test*/

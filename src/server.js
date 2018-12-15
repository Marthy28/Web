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


//ajouter un singe
 app.get('/addmonkey', function (req, res) {
  res.render( 'addmonkey', { title : 'Singes'})
});

app.post('/addmonkey', function(req, res){
  models.singes.create({
    Nom : req.body.Nom,
    Race : req.body.Race,
    Age : req.body.Age,
    Cage : req.body.Cage
  })
  .then(()=> {
    res.send('Monkey added ! ')
  })
})

//ajouter une cage
app.get('/addcage', function (req, res) {
 res.render( 'addcage', { title : "Ajout d'une cage"})
});

app.post('/addcage', function(req, res){
  models.cages.create({
    Number : req.body.Number
  })
  .then(()=> {
    res.send('Cage added !')
  })
})

//afficher tous les singes
app.get('/singes', function(req, res) {
   models.singes.findAll()
   .then ((singe) => {
      res.render( 'index', { title : 'Singes', singes : singe })
   })
})

//isoler un singe
app.get('/singes/:id', function(req, res) {
  models.singes.findOne({
      id : req.params.id
  })
  .then ((singe) => {
    res.render('monkey', {title : 'Singe n ' + req.params.id, singes : singe})
  })

})

//supprmier un singe
app.get('/deletesinge', function (req, res) {
 res.render( 'deletesinge', { title : 'supprmier singe'})
});

app.delete('/deletesinge/:Nom', function(req, res){
  models.singes.destroy({
    where : {
       Nom : req.params.Nom
    }
  })
  .then(()=> {
    res.send('Monkey deleted !')
  })
})


app.post('/users/delete', function(req, res, next) {

   models.singes.destroy({
    where : { id : req.body.id }
  });
});






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

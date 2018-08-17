const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller');

//  INIT APP, PORT
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use( express.static( __dirname + "/../build") );

//  GET THE DATA FROM URL 
app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books', bc.update);
app.delete('/api/books', bc.delete);

//  START SERVER AND LISTEN FOR CHANGE
app.listen(port, () => { 
    console.log(`Server is up and running on port:${ port }`) 
});



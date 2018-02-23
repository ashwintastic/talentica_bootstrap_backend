import 'babel-polyfill';
const express    = require('express');
//const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app        = express();
const port       = 8000;
const routes    = require('./routes');
//import routes from './routes'



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




routes(app);

app.listen(port, function(){
    console.log("we are live on port number", port)
});

const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
// Validation package class
const morgan = require('morgan');


const courses = require('./routes/courses');
const home = require('./routes/home');

const express = require('express'); 

const app = express();

app.set('view engine', 'pug');// template enginee for "views" in the MVT, this are the T
app.set('views','./views');// default

if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
  startupDebugger('Morgan middleware logging request enabled as dev env');
  // Configuration
  console.log('Application Name: '+ config.get('name'));
  console.log('Application Name: '+ config.get('mail.host'));
  //console.log('Mail Password: '+ config.get('mail.password'));
  // Show NODE_ENV, it should be development if the if works
  console.log(process.env.NODE_ENV);
}



// routing

app.use('/', home);
app.use('api/courses/', courses);



console.log(process.env.NODE_ENV);


//should log once teh app start and the connection to db works
dbDebugger('connected to database...')


// providing a way to use the available port

const port = process.env.PORT  || 3000;

app.listen(port, () => console.log(`Listen on port ${port}...`));


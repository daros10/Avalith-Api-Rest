process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://mongo:27017/avalith'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ***************** Note *******************
// When app is dockerized you need to change
// urlDB='mongodb://localhost/avalith' to 
// urlDB='mongodb://mongo:27017/avalith'
// seems that in container not work localhost.
// *******************************************
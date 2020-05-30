process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/avalith'
} else {
    // urlDB = process.env.MONGO_URI;
    urlDB = 'mongodb+srv://daros10:ckwURAz9Q8pEraxH@cluster0-pngyb.mongodb.net/avalit'
}

process.env.URLDB = urlDB;
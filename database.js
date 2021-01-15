require('dotenv').config()

const mongoose = require('mongoose');



class DataBase {


    constructor(){
        this._connect();
    }


    async _connect(){
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true  } )
        .then(()=>{
            console.log('Database connection succesful');
        })
        .catch(err=>{
            console.error('Database connection error');
        })
    }
}

module.exports = new DataBase();
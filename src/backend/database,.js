const mongoose = require('mongoose')

const connectURL = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,
        {
            useNewUrlParser:true,
            useNewUnifiedTopology:true,
            useCreateIndex:true
        }).then(con =>{
            console.log('DB CONNECTED WITH HOST : ${con.connection.host}')
        })
}

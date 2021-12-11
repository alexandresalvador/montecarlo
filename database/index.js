const mongoose = require("mongoose");
require("dotenv").config();
const DBCON = process.env.MONGODB_KEY;

mongoose
  .connect(DBCON, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
   // useFindAndModify: false,
    
  })
  .then(() => {

    console.log( "MONGODB ESTÁ RODANDO! ");
  })
  .catch((error) => {

    console.log(`MONGODB ESTÁ PARADO, PORQUE ${error}`);
  });

mongoose.Promise = global.Promise;
module.exports = mongoose;
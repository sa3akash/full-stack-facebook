const express = require('express');
const cors = require('cors');
const {readdirSync} = require("fs")
require("dotenv").config()
const mongoose = require('mongoose');
const { customErrorHandler } = require('./middlewares/ErrorHandler');


const app = express();

// cors
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json({limit: "15mb"}));
app.use(express.urlencoded({extended: true,}))

// all the routes file loop and import
readdirSync("./routes").map((f)=> app.use("/api", require("./routes/" + f)))

// Database Connection  "mongodb://0.0.0.0:27017/facebook"
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB connected...");
  });

// error handler
app.use(customErrorHandler)


// production

// if(process.env.NODE_ENV=='production'){
//   const path = require("path")

//   app.get("/",(req,res)=>{
//     app.use(express.static(path.resolve(__dirname, "client", "build")))
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   })
// }

const PORT = process.env.PORT;

if(PORT){
  app.listen(PORT,()=>console.log(`listening on port ${PORT}`));
}


const express =require("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const { ModeCommentTwoTone } = require("@mui/icons-material");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(()=>console.log("DB Connection Successfull!"))
  .catch((err)=>console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)
app.listen(8800, ()=>{
    console.log("Backend server is running"); 
});
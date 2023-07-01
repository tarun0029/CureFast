const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const app = express();   

app.use(cors())
app.use(express.json({ limit : "10mb"}))

const PORT = process.env.PORT || 5000;

//mongodb connection
connectDB();


// routes
app.use("/", require("./routes/patientRoutes"));
app.use("/", require("./routes/doctorRoutes"));






// app.get("/",(req,res) => {
//     res.send("Server is running")
// })

// app.post("/patient_register",async(req,res)=>{
//     console.log(req.body)
//     const { email } = req.body
     
//     // patientRegisterModel.findOne({email : email},(err,result)=> {
//     //     console.log(result);
//     //     console.log(err);
//     // })
//     const exisitingUser = await patientRegisterModel.findOne({ email: req.body.email });
//     if(exisitingUser){
//         console.log("user is already exist");
//     }
//     else{
//       // console.log("Not exist");
//        const data = patientRegisterModel(req.body);
//        const save = data.save();
//        res.send({message : "Successfully register !!"})
//     }
// })

app.listen(PORT,()=> console.log("server is running at port : " + PORT))

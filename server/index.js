const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json({ limit : "10mb"}))

const PORT = process.env.PORT || 5000;

// mongodb connection 
console.log(process.env.CONNECTION_URL)
mongoose.set("strictQuery",false);
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to the database'))
    .catch((error) => console.error('Database connection error:', error));

//  Schema 

const patientRegisterSchema = mongoose.Schema({
    email: {
        type : String,
        unique : true,
    },
    password: String,
    confirmPassword: String,
})

const patientRegisterModel = mongoose.model("patientRegister",patientRegisterSchema);





// api

app.get("/",(req,res) => {
    res.send("Server is running")
})

app.post("/patient_register",async(req,res)=>{
    console.log(req.body)
    const { email } = req.body
     
    // patientRegisterModel.findOne({email : email},(err,result)=> {
    //     console.log(result);
    //     console.log(err);
    // })
    const exisitingUser = await patientRegisterModel.findOne({ email: req.body.email });
    if(exisitingUser){
        console.log("user is already exist");
    }
    else{
      // console.log("Not exist");
       const data = patientRegisterModel(req.body);
       const save = data.save();
       res.send({message : "Successfully register !!"})
    }
})

app.listen(PORT,()=> console.log("server is running at port : " + PORT))

this is of of vimal/curefast
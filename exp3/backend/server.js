const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

/* ✅ FORCE CORS ALLOW ALL (temporary for experiment) */
app.use(cors({ origin: "*" }));

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hit@1804",
  database: "reactlogin"
});

db.connect(err=>{
  if(err) console.log(err);
  else console.log("MySQL Connected");
});

app.post("/login",(req,res)=>{

  const {username,password}=req.body;

  const sql="SELECT * FROM users WHERE username=? AND password=?";

  db.query(sql,[username,password],(err,result)=>{

    if(err){
      console.log(err);
      return res.json({message:"error"});
    }

    if(result.length>0){
      res.json(result[0]);
    } else {
      res.json({message:"Invalid"});
    }

  });

});

app.listen(5050,()=>{
  console.log("Server running on 5050");
});
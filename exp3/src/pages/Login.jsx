import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login(){

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

try{

      const res = await axios.post("http://localhost:5050/login",{
        username: username,
        password: password
      });

      console.log(res.data);

    if(res.data.role === "admin"){
        navigate("/admin",{state:{user:res.data.username}});
    }
    else if(res.data.role === "user"){
        navigate("/user",{state:{user:res.data.username}});
    }
    else{
        alert("Invalid username or password");
    }

    }catch(err){
      console.log(err);
      alert("Server error");
    }

  };

  return(

    <div className="login-container">

      <div className="login-box">

        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

      </div>

    </div>

  );
}

export default Login;
import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onLogin(username);
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            style={styles.input}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.btn}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right,#6a6adf,#8a6adf)"
  },
  card: {
    background: "white",
    padding: 40,
    borderRadius: 12,
    width: 380,
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)"
  },
  input: {
    padding: 14,
    marginTop: 6,
    marginBottom: 18,
    borderRadius: 10,
    border: "1px solid #ccc",
    width: "100%",
    fontSize: 16,
    boxSizing: "border-box"
  },
  btn: {
     padding: 14,
    border: "none",
    borderRadius: 10,
    background: "linear-gradient(to right,#5f5fe6,#6f6fe8)",
    color: "white",
    fontSize: 18,
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box"
  }
};

export default Login;
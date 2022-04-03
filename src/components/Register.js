import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const authObject = {
      "PRIVATE-KEY": "34e83592-42f1-4eaf-ab3a-45024c737190",
    };
    try {
      const register = await axios.post(
        "https://api.chatengine.io/users/",
        { username: username, email: email, secret: password }, // Body object
        { headers: authObject } // Headers object
      );
      if (register) {
        navigate("/");
      }
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>SignUp</span>
            </button>
          </div>
        </form>
        <button onClick={() => navigate("/login")}>
          Already have an account
        </button>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Register;

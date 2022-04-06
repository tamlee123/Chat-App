import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import IconChat from "../assets/chatIcon.jpg";
import Side from "../styledComponent/side";
import Main from "../styledComponent/main";
import birdImg from "../assets/bird.jpg";
import Bird from "../styledComponent/bird";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const projectID = process.env.REACT_APP_PROJECTID;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      const userExists = await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();

      if (userExists) {
        navigate("/");
      }

      setError("");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <Row style={{ display: "flex", height: "100%" }}>
      <Col xs={0} sm={0} md={0} lg={8}>
        <Side>
          <div className="messenger">
            <img className="IconChat" src={IconChat} alt="chat icon" />
            <p className="converse">Convese With Your Friends!</p>
          </div>
        </Side>
      </Col>
      <Col xs={24} sm={24} md={24} lg={9}>
        <Main>
          <div className="account">
            <p className="question">Don't have an account?</p>
            <button onClick={() => navigate("/register")} className="form-btn">
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="inputForm">
            <p className="form-greeting">Welcome Back</p>
            <div className="formDiv">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button type="submit" className="loginButton">
                Start chatting
              </button>
            </div>
          </form>

          <h3 className="error">{error}</h3>
        </Main>
      </Col>
      <Col xs={0} sm={0} md={0} lg={7}>
        <Bird>
          <img src={birdImg} alt="bird img"></img>
        </Bird>
      </Col>
    </Row>
  );
};

export default Login;

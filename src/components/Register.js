import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Main from "../styledComponent/main";
import Side from "../styledComponent/side";
import { Col, Row } from "antd";
import birdImg from "../assets/bird.jpg";
import IconChat from "../assets/chatIcon.jpg";
import Bird from "../styledComponent/bird";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const authObject = {
      "PRIVATE-KEY": privateKey,
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
      setError("Oops, something went wrong, Please try again.");
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
            <p className="question">Already Have an Account?</p>
            <button onClick={() => navigate("/")} className="form-btn">
              Sign In
            </button>
          </div>
          <form onSubmit={handleRegister} className="inputForm">
            <p className="form-greeting">Let's Chat</p>
            <div className="formDiv">
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
              <button type="submit" className="loginButton">
                Sign Up
              </button>
            </div>
          </form>
          <h1>{error}</h1>
        </Main>
      </Col>
      <Col xs={0} sm={0} md={0} lg={7}>
        <Bird>
          <img
            style={{ width: "600px", height: "700px" }}
            src={birdImg}
            alt="bird img"
          ></img>
        </Bird>
      </Col>
    </Row>
  );
};

export default Register;

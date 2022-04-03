// import { ChatEngine } from "react-chat-engine";
// import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ChatApp from "./components/ChatApp";
import RoutesApp from "./routes";
// import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "./components/ChatFeed";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
// const projectID = "32f34d99-af3d-4830-9718-92751ffa16a0";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
};
export default App;

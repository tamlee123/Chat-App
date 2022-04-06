import RoutesApp from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

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

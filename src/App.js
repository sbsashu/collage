import "./App.css";
import Collage from "./component/Collage";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Collage} />
      </Router>
    </div>
  );
}

export default App;

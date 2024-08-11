import { BrowserRouter as Router } from "react-router-dom";
import SiteRoutes from "./components/SiteRoutes";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <SiteRoutes />
      </Router>
    </div>
  );
}

export default App;

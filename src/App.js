import { BrowserRouter as Router } from "react-router-dom";
import SiteRoutes from "./components/SiteRoutes";
import Header from "./components/header/Header";
import { CartProvider } from "./context/Cart";

function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <SiteRoutes />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

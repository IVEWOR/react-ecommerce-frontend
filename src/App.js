import { BrowserRouter as Router } from "react-router-dom";
import SiteRoutes from "./components/SiteRoutes";
import Header from "./components/header/Header";
import { CartProvider } from "./context/Cart";
import { ProductsProvider } from "./context/Products";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <Header />
            <SiteRoutes />
            <Footer />
          </Router>
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;

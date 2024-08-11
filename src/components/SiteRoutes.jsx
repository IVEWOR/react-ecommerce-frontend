import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/categories/Categories";
import Products from "../pages/products/Products";
import SingleCategory from "../pages/categories/SingleCategory";

export default function SiteRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:categoryName" element={<SingleCategory />} />
        </Routes>
    )
}
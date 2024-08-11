import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="flex gap-6">
            <a href="/">Home</a>
            <Link to="/categories">Categories</Link>
            <a href="/products">Products</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
        </nav>
    )
}
import { useEffect, useState } from "react";
import Container from "../../components/Container";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const jsonData = await response.json();
            setCategories(jsonData);
        }
        fetchData();
    }, [])
    return (
        <Container>
            <h1>Categories</h1>
            {categories.map((category, index) => (
                <div key={index}>
                    <a href={`/category/${category}`}>
                        {category}
                    </a>
                </div>
            ))}
        </Container>
    )
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCategory() {
    const { categoryName } = useParams();
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
            const jsonData = await response.json();
            setCategory(jsonData);
        }
        fetchData();
    }, [categoryName])
    return (
        <div>
            <h1>Category: {categoryName}</h1>
            <div>
                {category.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
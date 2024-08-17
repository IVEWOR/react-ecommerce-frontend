import { useEffect, useState } from "react";
import Container from "../../components/Container";
import ProductLoop from "../../components/ProductLoop";
import Title from "../../components/Title";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const jsonData = await response.json();
            setProducts(jsonData);
        }
        fetchData();
    }, [])
    return (
        <Container>
            <Title title={"All Products"} />
            <ProductLoop products={products} />
        </Container>
    )
}
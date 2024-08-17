import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductLoop from "../../components/ProductLoop";
import Container from "../../components/Container";
import Title from "../../components/Title";

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
        <Container>
            <Title title={categoryName} />
            <ProductLoop products={category} />
        </Container>
    )
}
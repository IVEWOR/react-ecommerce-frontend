import { useContext, useEffect } from "react";
import Container from "../../components/Container";
import ProductLoop from "../../components/ProductLoop";
import Title from "../../components/Title";
import { ProductsContext } from "../../context/Products";

export default function Products() {
    const { products } = useContext(ProductsContext);
    return (
        <Container>
            <Title title={"All Products"} />
            <ProductLoop products={products} />
        </Container>
    )
}
import { useContext } from "react";
import Container from "../components/Container";
import { CartContext } from "../context/Cart";

export default function Cart() {
    const cart = useContext(CartContext);
    return (
        <Container>
            <div className="py-10">
                <h1 className="text-2xl font-semibold text-center">Cart</h1>
            </div>
            <div>
                {cart && cart.items.map((product, index) => (
                    <div className="border" key={index}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}
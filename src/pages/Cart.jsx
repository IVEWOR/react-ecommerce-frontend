import { useContext } from "react";
import Container from "../components/Container";
import { CartContext } from "../context/Cart";

export default function Cart() {
    const cart = useContext(CartContext);

    // subtotal of the prices
    const subTotal = cart.items.reduce((a, b) => a + b.price, 0);

    // tax calculation
    const tax = subTotal * .05;

    // mass total with round off
    const total = Math.round(subTotal + tax);
    return (
        <Container>
            <div className="py-10">
                <h1 className="text-2xl font-semibold text-center">My Cart</h1>
            </div>
            <div className="flex justify-between items-center py-4 mb-4">
                {cart &&
                    <>
                        <h2 className="text-lg font-semibold">Items</h2>
                        <button onClick={cart.clearCart} className="bg-zinc-600 text-white text-sm font-semibold py-2 px-4 rounded-lg focus:outline focus:outline-4 focus:outline-zinc-400">
                            Clear Cart
                        </button>
                    </>
                }
            </div>
            <div className="md:grid grid-cols-3 gap-6">
                <div className="grid gap-4 col-span-2 mb-6">
                    {cart && cart.items.map((product, index) => (
                        <div className="flex gap-6 border-b pb-4" key={index}>
                            <div className="p-[20px] bg-zinc-100 flex items-center justify-center">
                                <img className="w-[130px] h-[130px] object-contain mix-blend-multiply" src={product.image} alt={product.title} height="300" width="auto" />
                            </div>
                            <div>
                                <h2 className="font-semibold mb-2">{product.title}</h2>
                                {/* <p>{product.description}</p> */}
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    <div className="border-2 border-zinc-950 rounded-lg px-4">
                        <div className="border-b border-zinc-300 py-4">
                            <h3 className="font-semibold text-xl">Summary</h3>
                        </div>
                        <div className="border-b border-zinc-300 py-4 flex items-center justify-between">
                            <p className="font-medium">Subtotal</p>
                            <p className="font-medium">${subTotal}</p>
                        </div>
                        <div className="border-b border-zinc-300 py-4 flex items-center justify-between">
                            <p className="font-medium">Tax (5%)</p>
                            <p className="font-medium">${tax}</p>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <p className="font-medium">Total</p>
                            <p className="font-medium">${total}</p>
                        </div>
                        <div className="py-4">
                            <button className="bg-zinc-950 text-white w-full p-3 rounded-lg focus:outline focus:outline-4 focus:outline-zinc-400">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
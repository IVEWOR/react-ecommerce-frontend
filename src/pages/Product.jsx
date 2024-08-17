import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { CartContext } from "../context/Cart";

export default function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const cart = useContext(CartContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const jsonData = await response.json();
            setProduct(jsonData);
        }
        fetchData();
    }, [productId])

    return (
        <Container>
            <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-[20px] w-[100%] h-[650px] bg-zinc-100 flex items-center justify-center">
                    <img className="h-[300px] mix-blend-multiply" src={product.image} alt={product.title} height="300" width="auto" />
                </div>
                <div className="py-4">
                    <div className="mb-6">
                        <a className="uppercase text-[12px] font-semibold text-zinc-600 hover:underline" href={`/category/${product.category}`}>{product.category}</a>
                    </div>
                    <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <div>${product.price}</div>
                        <div className="flex items-center gap-1">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </span>
                            {/* <span className="text-[15px]">{product.rating.rate}</span> */}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="font-semibold mb-1">Description</h2>
                        {product.description}
                    </div>
                    <button className="bg-zinc-950 text-white font-semibold p-3 w-full focus:outline focus:outline-4 focus:outline-zinc-400 rounded-lg flex items-center justify-center gap-2"
                        onClick={() => cart.setItems([
                            ...cart.items,
                            { title: product.title, price: product.price, image: product.image, description: product.description }
                        ])}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </span>
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </Container >
    )
}
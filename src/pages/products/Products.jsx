import { useEffect, useState } from "react";
import Container from "../../components/Container";

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
            <div className="grid grid-cols-4 gap-4">
                {products && products.map((item, index) => (
                    <div className="" key={index}>
                        <div className="p-[20px] w-[100%] h-[350px] bg-zinc-100 flex items-center justify-center">
                            <img className="mix-blend-multiply h-[200px] w-[auto]" src={item.image} alt={item.title} width="auto" height="200" />
                        </div>
                        <h3 className="overflow-hidden truncate text-[15px]">{item.title}</h3>
                        <div className="text-[15px]">${item.price}</div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
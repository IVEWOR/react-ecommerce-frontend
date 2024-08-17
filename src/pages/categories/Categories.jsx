import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";

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
            <Title title={"Categories"} />
            <div className="grid grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <a className="bg-zinc-100 h-[300px] flex items-center justify-center uppercase font-semibold rounded-lg hover:bg-zinc-200 transition-all hover:underline" key={index} href={`/category/${category}`}>
                        <span>{category}</span>
                    </a>
                ))}
            </div>
        </Container>
    )
}
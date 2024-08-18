import React, { useEffect, useRef, useContext } from "react";
import banner from "../static/images/banner.webp";
import Container from "../components/Container";
import women from "../static/images/women.webp";
import others from "../static/images/others.webp";
import men from "../static/images/men.webp";
import bag from "../static/images/bag-240px.avif";
import bag2 from "../static/images/letherbag.avif";
import { ProductsContext } from "../context/Products";
import ProductLoop from "../components/ProductLoop";

export default function Home() {
    const marqueeRef = useRef(null);
    const prods = useContext(ProductsContext);
    console.log(prods.products)

    useEffect(() => {
        const marquee = marqueeRef.current;
        const firstClone = marquee.children[0].cloneNode(true); // Clone the first element
        marquee.appendChild(firstClone); // Append the clone to the marquee
    }, []);

    return (
        <>
            <div className="bg-cover bg-no-repeat bg-top relative" style={{ backgroundImage: `url(${banner})` }}>
                <div className="bg-zinc-950 opacity-40 absolute top-0 left-0 right-0 bottom-0 z-0"></div>
                <div className="z-20 relative">
                    <Container>
                        <div className="min-h-[500px] grid content-end">
                            <div className="pb-10">
                                <p className="uppercase text-sm text-white tracking-wider mb-4">All Products</p>
                                <h1 className="text-white text-3xl font-semibold mb-6">React Ecommerce Store</h1>
                                <button className="border-2 border-white text-sm text-white font-semibold p-2 px-4 transition-all hover:bg-white hover:text-zinc-950 focus:outline focus:outline-4 focus:outline-zinc-400 rounded-lg">Shop Now</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className="bg-[#efefef]">
                <Container>
                    <div className="text-center pt-20 pb-10">
                        <img className="mx-auto" src={bag} alt="bag" width="120px" />
                        <h2 className="max-w-[500px] mx-auto uppercase text-4xl mt-4 tracking-wider">Our aim: offer elegant, timeless & functional products</h2>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <a className="border-b border-b-transparent hover:border-zinc-400 transition-all" href="">Our Story</a>
                            <a className="border-b border-b-transparent hover:border-zinc-400 transition-all" href="">All Products</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 pt-4 pb-20">
                        <div className="col-span-3 relative overflow-hidden">
                            <a href="/category/women's%20clothing">
                                <img className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out hover:scale-110" src={women} alt="womens" />
                                <h3 className="uppercase text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Women</h3>
                            </a>
                        </div>
                        <div className="col-span-2 grid gap-4">
                            <div className="relative overflow-hidden">
                                <a href="/category/men's%20clothing">
                                    <img className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out hover:scale-110" src={men} alt="mens" />
                                    <h3 className="uppercase text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Men</h3>
                                </a>
                            </div>
                            <div className="relative overflow-hidden">
                                <a href="/category/jewelery">
                                    <img className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out hover:scale-110" src={others} alt="jewelery" />
                                    <h3 className="uppercase text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">jewelery</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-[#efefef] pb-12">
                <div className="w-full overflow-hidden relative">
                    <div className="flex slide-over whitespace-nowrap" ref={marqueeRef}>
                        <div className="flex items-center gap-4 pr-[120px]">
                            <img src={bag2} alt="bag" width="90" />
                            <p className="text-5xl text-zinc-600 tracking-wider">
                                NEW RELEASE REACT ECOMMERCE STORE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ProductLoop products={prods.products} />
            </div>
        </>
    )
}
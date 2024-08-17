import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        // get items from local
        const savedItems = localStorage.getItem("cartItems");
        return savedItems ? JSON.parse(savedItems) : [];
    })

    useEffect(() => {
        // save items to local storage
        localStorage.setItem("cartItems", JSON.stringify(items));
    }, [items])
    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    )
}
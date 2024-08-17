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

    // function to clear the cart items from local storage
    const clearCart = () => {
        console.log("clear fn called")
        setItems([]);
        localStorage.removeItem("cartItems");
    }

    return (
        <CartContext.Provider value={{ items, setItems, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
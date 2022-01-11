import { createContext, useReducer } from "react";

const defaultCartState = {
    cartItems: [],
    totalPrice: 0
}

const CartContext = createContext(
    {
        ...defaultCartState,
        addToCart(mealId) {
        },
        removeFromCart(mealId) {
        },
        clearCart() {
        }
    }
);

const cartReducer = (state, action) => {

    let allCartItems = [...state.cartItems];

    const calculateTotalPrice = () => {
        return allCartItems.reduce((a, b) => a + (b.qty * b.price), 0);
    }

    switch (action.type) {

        case "ADD_TO_CART": {
            const foundMeal = allCartItems.find((item) => item.id === action.payload.mealId);
            if (foundMeal) {
                foundMeal.qty += 1;
            } else {
                allCartItems.push({ id: action.payload.mealId, name: action.payload.mealName, price: action.payload.mealPrice, qty: 1 });
            }
            return { cartItems: allCartItems, totalPrice: calculateTotalPrice() };
        }

        case "REMOVE_FROM_CART": {
            const foundMeal = allCartItems.find((item) => item.id === action.payload.mealId);
            foundMeal.qty -= 1;
            if (!foundMeal.qty) {
                allCartItems = allCartItems.filter((item) => item.id != foundMeal.id);
            }
            return { cartItems: allCartItems, totalPrice: calculateTotalPrice() };
        }

        case "CLEAR_CART": {
            return defaultCartState;
        }

        default: {
            return defaultCartState;
        }
    }
}

export const CardContextProvider = (props) => {

    const [cart, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addToCart = (mealId, mealPrice, mealName) => {
        dispatchCart({ type: "ADD_TO_CART", payload: { mealId, mealPrice, mealName } });
    }

    const removeFromCart = (mealId) => {
        dispatchCart({ type: "REMOVE_FROM_CART", payload: { mealId } });
    }

    const clearCart = () => {
        dispatchCart({ type: "CLEAR_CART" });
    }

    return (
        <CartContext.Provider value={{ ...cart, addToCart, removeFromCart, clearCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;
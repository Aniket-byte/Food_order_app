import styles from "./MealItem.module.css";

import React, { useContext } from "react";
import AddToCartForm from "./AddToCartForm";

import CartContext from "../../store/cart-context";

const MealItem = (props) => {

    const cartContext = useContext(CartContext);

    const addToCartHandler = () => {
        cartContext.addToCart(props.mealId, props.mealPrice, props.mealName);
    }

    const removeFromCartHandler = () => {
        cartContext.removeFromCart(props.mealId)
    }

    return (
        <div className={styles["meal-item"]}>
            <div className={styles["meal-item-info"]}>
                <h3>{props.mealName}</h3>
                {props.mealSummary && <React.Fragment><span>{props.mealSummary}</span><br /></React.Fragment>}
                <span className={styles["meal-price"]}>${props.mealPrice}</span>
            </div>
            <div>
                <AddToCartForm onAddToCart={addToCartHandler} onRemoveFromCart={removeFromCartHandler} mealId={props.mealId} cartItems={cartContext.cartItems} />
            </div>
        </div>
    );
};

export default MealItem;
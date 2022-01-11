import styles from "./AddToCartForm.module.css";

import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

const AddToCartForm = (props) => {

    const [btnConfig, setbtnConfig] = useState({ qty: 0, showBtn: true });

    useEffect(() => {
        const mealInCart = props.cartItems.find((item) => item.id === props.mealId);
        setbtnConfig({ showBtn: !mealInCart?.qty, qty: mealInCart?.qty });
    }, [props.cartItems]);

    const addToCartHandler = () => {
        props.onAddToCart(props.mealId);
    }

    const removeFromCartHandler = () => {
        props.onRemoveFromCart(props.mealId)
    }

    return (
        <React.Fragment>
            {btnConfig.showBtn ?
                <Button className="submit" onClick={addToCartHandler}>+ Add</Button> :
                <div className={styles["inc-btns"]}>
                    <span onClick={removeFromCartHandler} className={styles["qty-change-btn"]}>-</span>
                    <span>{btnConfig.qty}</span>
                    <span onClick={addToCartHandler} className={styles["qty-change-btn"]}>+</span>
                </div>}
        </React.Fragment>
    );
};

export default AddToCartForm;
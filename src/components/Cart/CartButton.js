import styles from './CartButton.module.css';

import CartIcon from './CartIcon';

import React, { useState, useContext, useEffect } from 'react';
import MealItem from '../Meals/MealItem';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

import CartContext from '../../store/cart-context';


const OrderStatusModal = (props) => {
  return (
    <Modal onClick={props.onClose} modalHeading="Order Placed">
      <span>Your order is placed successfully :)</span>
      <div style={{ textAlign: "center" }} className='mt10'>
        <Button onClick={props.onClose} className="submit">Ok</Button>
      </div>
    </Modal>
  );
}

const CartModal = (props) => {
  return (
    <Modal onClick={props.onClose} modalHeading="Your Cart">
      {props.cartItems.length ?
        (
          <React.Fragment>
            {
              props.cartItems.map((item) => {
                return <MealItem key={item.id} mealId={item.id} mealName={item.name} mealPrice={item.price} />
              })
            }
            <p style={{ fontWeight: 500, textAlign: "right" }} className='mt5'>Your total is : <span className={styles['total-amount']}>${Math.round((props.totalPrice + Number.EPSILON) * 100) / 100}</span></p>
            <div style={{ textAlign: "center" }}>
              <Button onClick={props.onPlaceOrder} className="submit">Place Order</Button>
            </div>
          </React.Fragment>
        ) :
        <h3 style={{ margin: 0, fontWeight: 500 }}>No Item(s) in your cart</h3>
      }
    </Modal>
  );
}

const CartButton = () => {

  const cartContext = useContext(CartContext);
  const [blinkBtn, setBlinkBtn] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openPlaceOrderModal, setOpenPlaceOrderModal] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {

    if (cartContext.cartItems.length) {
      setTotalCartItems(cartContext.cartItems.reduce((a, b) => a + b.qty, 0));
    } else {
      setTotalCartItems("0");
    }

    setBlinkBtn(true);

    const timeoutRef = setTimeout(() => {
      setBlinkBtn(false);
    }, 300);

    return () => {
      clearTimeout(timeoutRef);
    }
  }, [cartContext.cartItems]);

  const openCardModalHandler = () => {
    setOpenCartModal(true);
  }

  const closeCardModalHandler = () => {
    setOpenCartModal(false);
  }

  const openPlaceOrderHandler = () => {
    setOpenPlaceOrderModal(true);
  }

  const closePlaceOrderHandler = () => {
    setOpenPlaceOrderModal(false);
    setOpenCartModal(false);
    cartContext.clearCart();
  }

  return (
    <React.Fragment>
      {
        openCartModal && <CartModal totalPrice={cartContext.totalPrice} cartItems={cartContext.cartItems} onPlaceOrder={openPlaceOrderHandler} onClose={closeCardModalHandler} />
      }
      {
        openPlaceOrderModal && <OrderStatusModal onClose={closePlaceOrderHandler} />
      }
      <button onClick={openCardModalHandler} className={styles['cart-button'] + (blinkBtn ? " " + styles["blink"] : "")}>
        <span className={styles['cart-icon']}><CartIcon /></span>
        <span className={styles['items-count']}>{totalCartItems}</span>
      </button>
    </React.Fragment>
  );
};

export default CartButton;

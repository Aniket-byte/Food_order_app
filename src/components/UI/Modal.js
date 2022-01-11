import styles from "./Modal.module.css";

import ReactDOM from "react-dom";
import Card from "./Card";
import Container from "./Container";
import React from "react";

const Backdrop = (props) => {
    return <div onClick={props.onClick} className={styles['overlay']}></div>
};

const ModalOverlay = (props) => {
    return (
        <Container className={styles["modal-overlay"] + " p5"}>
            <Card cardHeading={props.modalHeading}>
                {props.children}
            </Card>
        </Container>
    );
};

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className={styles['modal-wrapper']}>
            <Backdrop onClick={props.onClick} />
            <ModalOverlay modalHeading={props.modalHeading} onClick={props.onClick}>{props.children}</ModalOverlay>
        </div>,
        document.getElementById("overlays")
    );
};

export default Modal;
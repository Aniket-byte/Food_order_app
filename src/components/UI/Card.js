import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>
            {props.cardHeading && <div className={styles['card-head']}><h3>{props.cardHeading}</h3></div>}
            <div className={styles['card-body']}>
                {props.children}
            </div>
        </div>
    );
}

export default Card;
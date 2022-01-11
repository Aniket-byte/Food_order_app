import styles from "./Container.module.css";

const Container = (props) => {

    const className = styles.container + (props.className ? ` ${props.className}` : "");

    return <div onClick={props.onClick} className={className}>{props.children}</div>
}

export default Container;
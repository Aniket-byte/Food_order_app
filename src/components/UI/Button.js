import styles from './Button.module.css';

const Button = (props) => {
  const className =
    styles.button + (styles[props.className] ? ` ${styles[props.className]}` : '');

  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled || false}
      type={props.type || 'button'}
    >
      {props.children}
    </button>
  );
};

export default Button;

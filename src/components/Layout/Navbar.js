import styles from './Navbar.module.css';

import CartButton from '../Cart/CartButton';
import Container from '../UI/Container';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <Container className={styles['nav-container']}>
        <h3 className={styles['nav-head']}>Food App</h3>
        <ul className={styles['nav-items']}>
          <li className={styles['nav-link']}>
            <CartButton />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;

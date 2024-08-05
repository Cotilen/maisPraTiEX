import { Link } from "react-router-dom";
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav>
                <ul className={styles.lista}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user/1">User</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/heavy1">HeavyComponent</Link></li>
                    <li><Link to="/heavy2">HeavyComponent2</Link></li>
                    <li><Link to="/tabs">Tabs</Link></li>
                    <li><Link to="/modal">Modal</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

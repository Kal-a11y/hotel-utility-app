
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/stock/items">Stock</Link>
                </li>
                <li>
                    <button disabled>Coming Soon</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
import ThemeToggle from '../ThemeToggle';
import './index.css';

function Header() {

    return (
        <header className="top-header">
            <h1>Find, Sell, and Explore: Your Marketplace Hub</h1>
            <ThemeToggle />
        </header>
    )
};

export default Header;

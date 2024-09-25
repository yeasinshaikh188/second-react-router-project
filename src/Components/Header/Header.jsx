import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            
            {/* style={{ backgroundColor: 'lightblue', padding: '20px', textAlign: 'center' }} */}
            <nav>
                <span>My Website</span>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact Us</Link>
                <Link to='/Users'>Users</Link>
                {/* <a href="/">Home</a> */}
                {/* <a href="About">About</a> */}
                {/* <a href="Contuct">Contuct Us</a> */}
                
            </nav>
        </div>
    );
};

export default Header;
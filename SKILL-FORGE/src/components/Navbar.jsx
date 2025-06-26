import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import userIcon from '../assets/user.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SF</div>
      <ul className="navlinks">
        <li><Link to="/dashboard">Journeys</Link></li>
        <li><Link to="/progress">My Progress</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
      </ul>
      <div className="profile">
        <img src={userIcon} alt="User Icon" className="profile-icon" />
      </div>
    </nav>
  );
}

export default Navbar;

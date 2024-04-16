import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/Blue'>Blue</Link>
        <Link to='/Red'>Red</Link>
      </div>
    )
}

export default Navbar;
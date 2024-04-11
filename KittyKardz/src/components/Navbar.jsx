import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/CreateCard">Create Card</Link>
    </nav>
  );
};

export default Navbar;

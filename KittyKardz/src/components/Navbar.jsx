import { Link } from "react-router-dom";
// import asset for the logo
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-500 p-1">
      <Link to="/" className="text-white text-xl font-bold">
        <img
          src={logo}
          className="h-16 w-auto hover:opacity-50 duration-200 transform hover:-translate-x-1"
        ></img>
      </Link>
      <Link
        to="/CreateCard"
        className="text-white text-xl font-bold hover:text-gray-300 transition duration-200"
      >
        Create Card
      </Link>
    </nav>
  );
};

export default Navbar;

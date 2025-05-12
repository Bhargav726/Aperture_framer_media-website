import { Link } from 'react-router-dom';
import { LuLoaderPinwheel } from "react-icons/lu";
const Navbar = () => {
  
  return (
    <nav className="fixed bottom-6 z-50 left-1/3 bg-black text-white py-3 px-6 rounded-2xl shadow-lg flex gap-6 text-sm font-medium justify-center mt-4 mx-auto max-w-max ">
      <div className="left-0 text-2xl">
        <span role="img" aria-label="lens"><LuLoaderPinwheel /></span>
      </div>
      <Link to="/" className="hover:text-gray-400 text-white">Home</Link>
      <Link to="/portfolio" className="hover:text-gray-400 text-white">Portfolio</Link>
      <Link to="/blog" className="hover:text-gray-400 text-white">Blog</Link>
      <Link to="/about" className="hover:text-gray-400 text-white">About Me</Link>
      <Link to="/contact" className="hover:text-gray-400 text-white">Contact</Link>
    </nav>
  );
};

export default Navbar;

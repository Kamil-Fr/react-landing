export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-blue-500 transition duration-300">
          DevStudio
        </h1>
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
            Services
          </li>
          <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

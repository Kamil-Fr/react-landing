function Footer () {
  return (
    <footer className="bg-gray-600 text-gray-400 py-4">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <h3 className="text-white text-lg font-semibold">Contact Us</h3>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Services</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                </div>
            </div>
            <div className="border-t border-gray-500 mt-4 pt-4">
                 &copy; 2026 DevStudio. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer;
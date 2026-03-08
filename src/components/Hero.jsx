function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Build modern 
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{" "}websites</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">Create fast and beautiful landing pages using React and Tailwind.</p>

        <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 hover:scale-110 transition transform duration-300 text-white font-bold py-3 px-6 rounded-lg">
                Get Started
            </button>

            <button className="border border-gray-400 hover:bg-gray-100 hover:scale-110 transition transform duration-300 font-bold py-3 px-6 rounded-lg">
                Learn More
            </button>
        </div>

      </div>
    </section>
  )
}

export default Hero;
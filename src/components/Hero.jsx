function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold">Build modern websites</h1>
        <p className="mt-6 text-lg text-gray-600">Create fast and beautiful landing pages using React and Tailwind.</p>
        <div className="mt-8 flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 px-6 rounded-lg">
                Get Started
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition font-bold">
                Learn More
            </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
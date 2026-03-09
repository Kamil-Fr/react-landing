function Testimonials() {
  return (
    <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">What Developers Say</h2>   
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Thousands of developers trust our tools to build modern applications.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-600 italic">"This tool helped me launch my startup landing page in hours."</p>
                    <div className="mt-4 font-semibold">Alex Johnson</div>  
                </div>
                  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-600 italic">"Clean design and very easy to customize with React."</p>
                    <div className="mt-4 font-semibold">Maria Chen</div>  
                </div>
                  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <p className="text-gray-600 italic">"Perfect starting point for modern SaaS websites."</p>
                    <div className="mt-4 font-semibold">David Miller</div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;
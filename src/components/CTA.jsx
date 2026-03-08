function CTA() {
  return (
    <section className="py-24 bg-blue-500 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">Ready to get started?</h2>
        <p className="mt-4 text-lg text-blue-100">Join thousands of developers using our tools to build modern web applications.</p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">Learn More</button> 
         <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition transform hover:scale-105">Learn More</button>  
        </div>
       
      </div>
    </section>
  );        
}  

export default CTA;
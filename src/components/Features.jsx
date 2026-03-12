import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

function Features() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        }, []); 

    const cardClass = delay => `
    bg-white p-6 rounded-xl shadow hover:shadow-lg transition-transform duration-500 ease-out
    ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
    ${delay}
  `;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Why Choose Our Product</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our product offers amazing features that help you build modern, responsive websites quickly.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
            <div className={cardClass("")}>
                <h3 className="text-xl font-bold mb-2">⚡ Fast</h3>
                <p className="text-gray-600">Lightning fast load times for your apps.</p>
            </div>
            </FadeIn>
            <FadeIn delay={150}>    
            <div className={cardClass("delay-100")}>
                <h3 className="text-xl font-bold mb-2">🎨 Modern</h3>
                <p className="text-gray-600">Beautiful and clean design ready for production.</p>
            </div>
            </FadeIn>
            <FadeIn delay={300}>
            <div className={cardClass("delay-200")}>
                <h3 className="text-xl font-bold mb-2">📱 Responsive</h3>
                <p className="text-gray-600">Looks great on desktop, tablet, and mobile.</p>
            </div>
            </FadeIn>
                                 
        </div>
      </div>
    </section>
  );
}

export default Features;
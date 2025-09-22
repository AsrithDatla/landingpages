import { type Metadata } from "next";
import { Check, Heart, Shield, Users } from "lucide-react";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Footer } from "@/components/footer";
import { MobileStickyFooter } from "@/components/mobile-sticky-footer";

export const metadata: Metadata = {
  title: "Varicose Veins Management - Advanced Vascular Care | ReLiv Healthy",
  description: "Comprehensive varicose veins treatment with non-surgical approaches. Expert vascular care for leg pain, swelling, and circulation issues in Hyderabad."
};

const treatmentItems = [
  "Mild to Moderate Varicose Veins",
  "Spider Veins & Thread Veins",
  "Leg Heaviness & Chronic Fatigue",
  "Swelling and Skin Discoloration",
  "Nighttime Cramps & Restless Legs",
  "Venous Insufficiency",
  "Post-pregnancy Vein Issues"
];

const riskFactors = [
  "Prolonged standing or sitting",
  "Hormonal changes (pregnancy, menopause)",
  "Family history of vein problems",
  "Age and lifestyle factors",
  "Obesity and lack of physical activity"
];

const treatmentApproach = [
  {
    title: "Comprehensive Assessment",
    description: "Detailed venous health evaluation and circulation screening"
  },
  {
    title: "Lifestyle Optimization",
    description: "Movement therapy, leg elevation techniques, and hydration protocols"
  },
  {
    title: "Nutritional Support",
    description: "Anti-inflammatory diet guidance to improve vascular health"
  },
  {
    title: "Advanced Therapies",
    description: "Infrared sauna, cryotherapy, and compression therapy options"
  },
  {
    title: "Ongoing Monitoring",
    description: "Regular progress tracking and treatment adjustments"
  }
];

const testimonials = [{
  quote: "I used to feel embarrassed wearing dresses. Now the heaviness is gone, and the veins are barely visible.",
  name: "Sneha, 36"
}, {
  quote: "Long office hours made my legs feel like bricks. Their vein wellness plan made a huge difference in just a few weeks.",
  name: "Ramesh, 44"
}, {
  quote: "What I appreciated most was how holistic and gentle the care was—no scary procedures, just smart guidance.",
  name: "Anuradha, 50"
}];
export default function VaricoseVeinsPage() {
  return <div className="min-h-screen bg-white pb-20 md:pb-0">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center px-3 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20"></div>
      <div className="absolute inset-0 opacity-29" style={{
        backgroundImage: 'url(/varicose-veins.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>

      {/* Logo */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10">
        <a href="https://relivhealthy.com/" className="block transition-opacity duration-200 hover:opacity-80">
          <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/4a7c818821764b5fc4ecca88e27e5a38.gif" alt="ReLiv Healthy Logo" className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32" />
        </a>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-blue-50 text-blue-700">
              Vascular Health & Wellness
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: 'var(--color-primary)' }}>
            Advanced Varicose Veins Management
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Comprehensive, non-surgical solutions for healthier legs and improved circulation
          </p>

          <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Experience relief from leg pain, swelling, and discomfort with our evidence-based approach to vascular health.
            </p>
            <p>
              Our integrated treatment plans combine advanced therapies with lifestyle modifications to address the root causes of venous insufficiency.
            </p>
          </div>

          <a href="#consultation" className="btn-cta text-base sm:text-lg font-semibold w-full sm:w-auto">
            Schedule Your Vascular Assessment
          </a>
        </div>
      </div>
    </section>

    {/* Understanding Varicose Veins */}
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
              Understanding Varicose Veins
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Varicose veins affect millions of people worldwide, causing visible bulging veins, leg heaviness, and progressive discomfort that can significantly impact daily activities.
              </p>
              <p>
                These enlarged, twisted veins occur when blood pools due to weakened vein walls and faulty valves, leading to poor circulation and various symptoms that worsen over time if left untreated.
              </p>
              <p>
                At ReLiv Healthy, we understand that varicose veins are more than a cosmetic concern—they're a medical condition requiring comprehensive care that addresses both symptoms and underlying vascular health.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6 lg:mt-0">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full max-w-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                Common Symptoms
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Visible, bulging veins on legs</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Leg heaviness and fatigue</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Swelling that worsens during the day</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Nighttime cramps and restless legs</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span>Skin discoloration and irritation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Conditions We Treat */}
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
            Conditions We Treat
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Our comprehensive vascular care addresses a wide range of venous conditions with personalized treatment approaches
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {treatmentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 leading-snug">
                    {item}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Risk Factors & Causes */}
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
              Understanding Risk Factors
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Varicose veins develop due to various factors that affect vein wall strength and blood circulation. Understanding these risk factors helps in both prevention and treatment planning.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {riskFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base lg:text-lg text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mt-6 lg:mt-0">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
              <div className="space-y-1 sm:space-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">25%</h3>
                <p className="text-xs sm:text-sm text-gray-600">of adults affected</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Early</h3>
                <p className="text-xs sm:text-sm text-gray-600">intervention matters</p>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">90%</h3>
                <p className="text-xs sm:text-sm text-gray-600">success with proper care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Treatment Approach */}
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
            Our Comprehensive Treatment Approach
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            We combine evidence-based medical care with advanced therapeutic modalities to provide effective, non-surgical solutions for varicose veins and venous insufficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {treatmentApproach.map((approach, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base flex-shrink-0">
                  {index + 1}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 leading-snug">
                  {approach.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advanced Therapies Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-center" style={{ color: 'var(--color-primary)' }}>
            Advanced Therapeutic Options
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-md">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Infrared Sauna Therapy</h4>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Improves circulation and reduces inflammation through deep heat therapy</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-md">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Cryotherapy</h4>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Reduces swelling and vein inflammation through controlled cold therapy</p>
            </div>
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-md">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-900">Compression Therapy</h4>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Medical-grade compression recommendations for optimal vein support</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-3xl mx-auto px-2">
            Our goal is to reduce discomfort, prevent progression, and help you regain confidence in your daily activities through personalized, evidence-based care.
          </p>
        </div>
      </div>
    </section>

    {/* Patient Success Stories */}
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
            Patient Success Stories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Real experiences from patients who have found relief through our comprehensive vascular care programs
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>

    {/* Why Choose Early Treatment */}
    <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
              Why Early Treatment Matters
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Varicose veins are a progressive condition that typically worsens over time without proper intervention. Early treatment can prevent complications and improve long-term outcomes.
              </p>
              <p>
                Left untreated, varicose veins may lead to chronic venous insufficiency, skin changes, ulceration, and in rare cases, blood clots. Our proactive approach focuses on prevention and early intervention.
              </p>
              <p>
                At ReLiv Healthy, we help you address vein health before complications develop, using gentle, effective methods that support your body's natural healing processes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mt-6 lg:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
              Benefits of Our Approach
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">Non-surgical, minimally invasive options</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">Personalized treatment plans</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">Focus on lifestyle and prevention</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">Advanced therapeutic modalities</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">Comprehensive follow-up care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section id="consultation" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
          Take the First Step Toward Healthier Legs
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
          Don't let varicose veins limit your activities or confidence. Our comprehensive vascular care can help you find relief and prevent progression.
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          <a href="#consultation" className="btn-cta text-base sm:text-lg font-semibold w-full">
            Book a Vein Health Assessment Today
          </a>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 sm:px-5 sm:py-3 border-2 transition-all duration-200 ease-out min-h-[44px] text-sm sm:text-base font-semibold w-full border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white hover:-translate-y-1">
              Explore Our Circulation-Boosting Therapies
            </a>
            <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 sm:px-5 sm:py-3 border-2 transition-all duration-200 ease-out min-h-[44px] text-sm sm:text-base font-semibold w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:-translate-y-1">
              Talk to a Specialist About Natural Management
            </a>
          </div>
        </div>
      </div>
    </section>

    <MobileStickyFooter />
    <Footer />
  </div>;
}
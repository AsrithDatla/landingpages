import { type Metadata } from "next";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Footer } from "@/components/footer";
import { MobileStickyFooter } from "@/components/mobile-sticky-footer";
export const metadata: Metadata = {
  title: "Empowering You to Reclaim Balance, Naturally - ReLiv Healthy",
  description: "Hormonal Imbalance Care - Struggling with PCOD, PCOS, or Unexplained Infertility?"
};
const treatmentItems = ["PCOD & PCOS (Polycystic Ovarian Disease/Syndrome)", "Hormonal Weight Gain & Belly Fat", "Irregular Periods, Painful Periods, or Missed Cycles", "Excessive Facial Hair or Hair Loss", "Mood Swings, Fatigue, Acne & Insulin Resistance", "Unexplained Infertility or Difficulty Conceiving", "Post-pill Hormonal Imbalance or Cycle Disruption"];
const healingJourneySteps = ["Comprehensive Hormonal & Metabolic Assessment", "Personalized Nutrition & Supplement Plan", "Targeted Fitness Strategy (PMS-friendly, cycle-synced)", "IV Therapies to Restore Cellular Balance", "Ongoing Progress Reviews & Coaching"];
const stressFertilityItems = ["Stress & Sleep Support – CBT, Breathwork, Infrared Therapy", "Fertility Optimization for Natural Conception"];
const testimonials = [{
  quote: "After years of struggling with irregular periods and acne, I finally found a place that treated me like a person—not a problem.",
  name: "Sneha, 28"
}, {
  quote: "They didn't just hand me pills. They helped me heal. Three months in, and my periods are regular again.",
  name: "Madhavi, 31"
}, {
  quote: "I was losing hope on getting pregnant. But with ReLiv's support, I conceived naturally in 5 months.",
  name: "Farzana, 35"
}];
export default function HormonalImbalancePage() {
  return <div className="min-h-screen bg-white pb-20 md:pb-0" data-unique-id="0b86a5b0-7950-4e09-a032-88f785653e32" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-3 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20"></div>
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop)',
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

        <div className="relative z-10 w-full max-w-6xl mx-auto mt-20 sm:mt-0">
          <div className="max-w-4xl">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-blue-50 text-blue-700">
                Hormonal Imbalance Care
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{
            color: 'var(--color-primary)'
          }}>
              Empowering You to Reclaim Balance, Naturally
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Struggling with PCOD, PCOS, or Unexplained Infertility?
            </p>

            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                You're not alone—and you don't have to go through it alone either.
              </p>
              <p>
                At ReLiv Healthy, we understand how hormonal imbalances can affect your body, your mood, and your confidence. From irregular cycles and weight fluctuations to acne, hair loss, or fertility struggles—these are more than symptoms. They're signals your body is asking for help.
              </p>
              <p>
                We're here to listen, support, and guide you—not just with medication, but with a complete, root-cause focused approach to healing.
              </p>
            </div>
            
            <a href="#consultation" className="btn-cta text-base sm:text-lg font-semibold w-full sm:w-auto mb-2 sm:mb-8">
              Ready to take the first step?
            </a>
          </div>
        </div>
      </section>

      {/* Understanding Hormonal Health */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
                Understanding Hormonal Health
              </h2>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                <p>
                  Hormonal health isn't just about your cycle—it's about feeling whole, confident, and in control of your body again.
                </p>
                <p>
                  At ReLiv Healthy, we understand that hormonal imbalances affect every aspect of your well-being, from physical symptoms to emotional health and quality of life.
                </p>
                <p>
                  Let's work together to restore that balance, naturally and sustainably, with personalized care that addresses your unique needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6 lg:mt-0">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full max-w-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                  Common Signs
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span>Irregular or painful periods</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span>Unexplained weight gain</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span>Mood swings and fatigue</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span>Acne and hair changes</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span>Fertility challenges</span>
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
              We work with women experiencing a wide range of hormonal imbalances and reproductive health challenges
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

      {/* Our Approach */}
      <section className="py-16 px-8" data-unique-id="6f342738-96d4-4593-bf47-2ec95e0a735e" data-file-name="app/hormonal-imbalance-care/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="eeb8a137-9351-46a1-956a-8faa60cdf48a" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <h2 className="text-4xl font-bold mb-12" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="75988ef8-417f-47f5-97f9-543fa2823c75" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="cf2d1613-8f44-450a-b996-419153ea6309" data-file-name="app/hormonal-imbalance-care/page.tsx">
            Our Approach: Rooted in Science, Guided by Compassion
          </span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" data-unique-id="3fb0e755-d6dc-4bd2-a9b3-11eae10d4e71" data-file-name="app/hormonal-imbalance-care/page.tsx">
            <div data-unique-id="a203491d-c61e-4c38-ba01-eae4b236cd92" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-unique-id="4d9c6301-731b-4863-bd68-cd6bdf2fd6db" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="ee53cbee-6e18-41c8-9983-3090361b191c" data-file-name="app/hormonal-imbalance-care/page.tsx">
                We believe that hormones don't need to be fought—they need to be understood and supported.
              </span></p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-unique-id="0afce64f-da81-463c-b52c-a4e677504b1b" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="a17102e2-61ea-4ed2-824a-c7315122c74a" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Our program is built on an integrated care model that addresses your unique body, lifestyle, and emotional health.
              </span></p>
              <p className="text-lg text-gray-700 mb-8 font-medium" data-unique-id="7097deba-b781-42b7-844b-7aad417dff63" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="a4340502-b1d4-46c1-8771-60d848e2f2cb" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Here's what your healing journey may include:
              </span></p>
              
              <div className="space-y-6 mb-8" data-unique-id="3879c9a9-0f16-4a90-8349-b2689f472c2d" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
                {healingJourneySteps.map((step, index) => <div key={index} className="flex items-start gap-6" data-unique-id="ad91ea00-8e00-4ae3-b2e1-7f29be6513ad" data-file-name="app/hormonal-imbalance-care/page.tsx">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                  backgroundColor: 'var(--color-primary)'
                }} data-unique-id="06a9e2b7-59ac-4486-88cb-16e51f486493" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
                      {index + 1}
                    </div>
                    <span className="text-lg text-gray-700 leading-relaxed" data-unique-id="979c7072-7072-4cef-a3f7-88001252d0b0" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">{step}</span>
                  </div>)}
              </div>

              {/* Stress & Fertility Mini-cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8" data-unique-id="a8d05a53-b4db-4fd7-be3d-be5a2ddddfe3" data-file-name="app/hormonal-imbalance-care/page.tsx">
                <div className="space-y-4" data-unique-id="fd48f16c-2f2e-4183-ac63-54b5e3ed1805" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
                  {stressFertilityItems.map((item, index) => <div key={index} className="rounded-xl p-4" style={{
                  backgroundColor: 'rgba(95, 147, 205, 0.1)'
                }} data-unique-id="0db9b552-25fd-445f-8963-4e757b20a962" data-file-name="app/hormonal-imbalance-care/page.tsx">
                      <p className="text-gray-700 font-medium" data-unique-id="ff7dcd22-6bd4-40df-952c-200c7b42b355" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">{item}</p>
                    </div>)}
                </div>
              </div>

              <blockquote className="text-2xl font-medium italic pl-6 border-l-4 leading-relaxed mb-6" style={{
              borderColor: 'var(--color-secondary)',
              color: 'var(--color-primary)'
            }} data-unique-id="d96fe953-eb5b-4e1b-a653-d269f6e09778" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="090092c2-9753-4670-92ef-0a560f37951d" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Every body is different. So is every plan.
              </span></blockquote>
              <p className="text-xl text-gray-700 leading-relaxed" data-unique-id="88474256-55df-4b6a-97fb-4321f0087479" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="05b00c39-f769-4415-b3f9-c15962293cae" data-file-name="app/hormonal-imbalance-care/page.tsx">
                We meet you where you are—with no judgment and no quick-fixes.
              </span></p>
            </div>
            <div className="flex justify-center" data-unique-id="e20dde83-8ad0-4a49-879f-523cef7a0a19" data-file-name="app/hormonal-imbalance-care/page.tsx">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop" alt="Compassionate healthcare approach" className="rounded-2xl shadow-lg" data-unique-id="f66d2487-5748-4e3b-8c67-de7c18d8256f" data-file-name="app/hormonal-imbalance-care/page.tsx" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-16 px-8 bg-gray-50" data-unique-id="dedbf4a2-badb-4102-ae74-db9667ea37fe" data-file-name="app/hormonal-imbalance-care/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="101f188f-5118-4d78-b960-891ff315d801" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="c2805c0a-3e6c-4501-9afb-ff9f0c02f002" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="b3ec37c8-b8ba-4c96-b238-ffaa0dce2871" data-file-name="app/hormonal-imbalance-care/page.tsx">
            Real Stories. Real Transformation.
          </span></h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* You Deserve To Feel Like Yourself Again */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-50 to-purple-50" data-unique-id="9f57ec4b-f5a8-49e3-bdd2-a23f6a9a3b78" data-file-name="app/hormonal-imbalance-care/page.tsx">
        <div className="max-w-4xl mx-auto text-center" data-unique-id="55222487-1549-43c6-b0e9-fb4641e2f98a" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <h2 className="text-4xl font-bold mb-8" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="9585b7aa-844f-4551-9b52-70eb49c115cd" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="6d8b2cc7-01bc-4d04-ab7c-1a5a95ea95df" data-file-name="app/hormonal-imbalance-care/page.tsx">
            You Deserve to Feel Like Yourself Again
          </span></h2>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed" data-unique-id="178ac450-cdab-48c6-aa97-fe91ee904100" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="9efd58f2-8629-449d-af0f-b62020096718" data-file-name="app/hormonal-imbalance-care/page.tsx">
            Let's make your hormones work for you, not against you.
          </span></p>
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto mb-6" data-unique-id="8037bbd5-3cb7-4d66-b7d8-a6126b087b0f" data-file-name="app/hormonal-imbalance-care/page.tsx">
            <p className="text-xl font-semibold mb-2" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="ea337325-e782-4632-a69a-b67f7012f81f" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="616d550c-5378-4a20-950f-0cb780ef88f4" data-file-name="app/hormonal-imbalance-care/page.tsx">
              In-studio & online consults available
            </span></p>
          </div>
          <p className="text-lg text-gray-600" data-unique-id="ee833d49-e75b-4cc2-b086-8fbc26cbd1e4" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="60acb138-cd97-4a19-9135-41e53d84643b" data-file-name="app/hormonal-imbalance-care/page.tsx">
            Evidence-based. Individualized. Empathetic.
          </span></p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="consultation" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
            Ready to Reclaim Your Hormonal Balance?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
            Take the first step toward feeling like yourself again with our comprehensive, compassionate approach to hormonal health.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            <a href="#consultation" className="btn-cta text-base sm:text-lg font-semibold w-full">
              Book a Free Discovery Call
            </a>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 sm:px-5 sm:py-3 border-2 transition-all duration-200 ease-out min-h-[44px] text-sm sm:text-base font-semibold w-full border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white hover:-translate-y-1">
                Schedule a Full Hormonal Health Assessment
              </a>
              <a href="#consultation" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 sm:px-5 sm:py-3 border-2 transition-all duration-200 ease-out min-h-[44px] text-sm sm:text-base font-semibold w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:-translate-y-1">
                Download Our PCOS Wellness Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyFooter />
      <Footer />
    </div>;
}
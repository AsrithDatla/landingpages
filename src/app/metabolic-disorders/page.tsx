import { type Metadata } from "next";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Footer } from "@/components/footer";
import { MobileStickyFooter } from "@/components/mobile-sticky-footer";
import Logo from "@/components/Logo";
export const metadata: Metadata = {
  title: "Because Sustainable Health Is More Than Just Numbers - ReLiv Healthy",
  description: "Metabolic Health & Weight Management - Tired of Trying Everything and Still Feeling Stuck?"
};
const supportItems = ["Obesity & Stubborn Weight Gain", "Slow Metabolism, Belly Fat & Sugar Cravings", "Thyroid Imbalances (Hypothyroidism, Hashimoto's, Subclinical issues)", "Type 2 Diabetes & Pre-diabetes", "Insulin Resistance & Elevated Blood Sugar", "Hypertension & Fluctuating Blood Pressure", "Fatigue, Brain Fog, Mood Swings, and Sleep Struggles"];
const carePlanSteps = ["Metabolic & Hormonal Diagnostics", "Root Cause Mapping (Lifestyle + Biomarkers)", "Custom Nutrition Plan (Anti-inflammatory & Sustainable)", "Smart Fitness Strategy (Not Overtraining, Just Smart Training)", "IV Nutrient Therapy for Cellular Reset", "Stress, Sleep & Emotional Support", "Regular Tracking + Feedback Loops"];
const techAssistedItems = ["Infrared Sauna", "Cryotherapy", "EM Sculpt (Tech-Assisted Recovery)"];
const testimonials = [{
  quote: "I used to feel exhausted by 11am. ReLiv helped me reclaim my energy—and lose 7 kgs without starving.",
  name: "Rohini, 38"
}, {
  quote: "My blood sugar was borderline diabetic. With their help, I reversed it completely in 90 days.",
  name: "Nagarjuna, 45"
}, {
  quote: "I have thyroid and PCOS. For the first time, I felt like someone understood the whole picture.",
  name: "Amala, 33"
}];
export default function MetabolicDisordersPage() {
  return <div className="min-h-screen bg-white pb-20 md:pb-0" data-unique-id="2c65e15a-98c4-4f21-9dfa-f17be262e9fe" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-3 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20"></div>
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
        
        {/* Logo */}
        <Logo />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-blue-50 text-blue-700">
                Metabolic Health & Weight Management
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{
            color: 'var(--color-primary)'
          }}>
              Because Sustainable Health Is More Than Just Numbers
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Tired of Trying Everything and Still Feeling Stuck?
            </p>

            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                If you've been battling weight gain, thyroid issues, diabetes, or blood pressure fluctuations—you know it's not just about calories or pills.
              </p>
              <p>
                Your body is complex. Your health deserves more than shortcuts.
              </p>
              <p>
                At ReLiv Healthy, we help you understand why your body is resisting change—and what you can do to unlock sustainable healing, energy, and confidence.
              </p>
            </div>
            
            <a href="#consultation" className="btn-cta text-base sm:text-lg font-semibold w-full sm:w-auto">
              Ready to Get Started?
            </a>
          </div>
        </div>
      </section>

      {/* Problem Intro */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8" data-unique-id="3a2b2e3f-7737-4234-bb05-33a15839a925" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="3f1db6a6-bd40-4e73-9a88-f5e8caa443c6" data-file-name="app/metabolic-disorders/page.tsx">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center" style={{
          borderLeft: `4px solid var(--color-secondary)`
        }} data-unique-id="8bcee401-4291-4e92-9ae2-944c5c280404" data-file-name="app/metabolic-disorders/page.tsx">
            <div className="text-xl text-gray-700 leading-relaxed" data-unique-id="262d0188-0a4b-4c0c-88fa-4d5eb5df7338" data-file-name="app/metabolic-disorders/page.tsx">
              <p className="mb-4" data-unique-id="674738f0-b1d6-4cd6-aff9-808fb697dcbc" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="99c8f5c1-d1e5-4e4b-9ef0-1e1a74717035" data-file-name="app/metabolic-disorders/page.tsx">Your metabolism isn't broken—it's just been misunderstood.</span>
              </p>
              <p data-unique-id="3aa68223-b91c-45c6-848b-9d73bd824fac" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="9294a579-fff0-492c-b35e-12c91a9d7a35" data-file-name="app/metabolic-disorders/page.tsx">Let's change that together, with science-backed strategies that work for your unique body.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Understanding Metabolic Health
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We take a comprehensive approach to metabolic health, addressing the root causes of your symptoms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="bg-white rounded-xl p-6 h-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Conditions We Address
                </h3>
                <ul className="space-y-3">
                  {supportItems.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl p-6 h-full">
                <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                  & More
                </h3>
                <ul className="space-y-3">
                  {supportItems.slice(4).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Whole-Body, Root-Cause Approach */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              A Whole-Body, Root-Cause Approach
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We go beyond symptoms to address the underlying causes of metabolic dysfunction
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <blockquote className="text-xl sm:text-2xl font-medium italic pl-6 border-l-4 leading-relaxed" 
                  style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-primary)' }}>
                  We don't believe in crash diets or generic prescriptions.
                </blockquote>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  We believe in helping your body heal from the inside out—through real science, real food, real movement, and real support.
                </p>
                <p>
                  Our approach combines the latest medical research with time-tested holistic practices to create sustainable, personalized solutions for metabolic health.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                Our Core Principles
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Personalized nutrition plans based on your unique biochemistry</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Comprehensive lab testing to identify root causes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Lifestyle modifications for sustainable results</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Ongoing support and accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your Personalized Care Plan */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Your Personalized Care Plan
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              A comprehensive approach tailored to your unique metabolic needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carePlanSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" 
                       style={{ backgroundColor: 'var(--color-primary)' }}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                Tech-Assisted Recovery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {techAssistedItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <h4 className="text-lg font-semibold text-gray-800">{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xl text-gray-700 text-center font-medium mt-8">
              Whether you're living with hypothyroidism, early-stage diabetes, or just want to feel like yourself again—we've got you.
            </p>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Stories of Transformation
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Real people, real results. Here's what our clients have to say about their journey with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialSlider testimonials={testimonials} />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              Individual results may vary. These testimonials are not a guarantee of similar outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Empower Your Metabolism */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
            Empower Your Metabolism. Reclaim Your Life.
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            This isn't about quick fixes—it's about long-term wellness built around you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>In-Person Sessions</h3>
              <p className="text-gray-600">
                Visit our Banjara Hills studio for personalized, one-on-one consultations and treatments in a comfortable, professional setting.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>Virtual Care</h3>
              <p className="text-gray-600">
                Get expert guidance and support from the comfort of your home with our secure video consultations and remote monitoring.
              </p>
            </div>
          </div>
          
          <p className="mt-10 text-base text-gray-500 max-w-3xl mx-auto">
            Real guidance, science-backed interventions, and sustainable outcomes—tailored to your unique metabolic needs.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="book" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8" data-unique-id="67bb00bc-b31e-4b02-b0ca-4141654baff6" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="55b212b4-3433-4635-b6bc-4528acc44fe3" data-file-name="app/metabolic-disorders/page.tsx">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center" data-unique-id="c70e6e5e-2890-4163-8d16-88d1c265d735" data-file-name="app/metabolic-disorders/page.tsx">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="8198552c-c1bf-443e-86a2-167681a1706c" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="ff6b44f8-9c06-4afd-8647-c5f4ef46b3f4" data-file-name="app/metabolic-disorders/page.tsx">Ready to Get Started?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-unique-id="74961727-0a1e-40b3-8884-348e88647be8" data-file-name="app/metabolic-disorders/page.tsx">
              <a href="https://wa.me/919000767060?text=Hi, I would like to book a metabolic health consultation" className="btn-cta" data-unique-id="253c4840-bb97-4a1e-91a8-e344dfdf8829" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="a7f52aa9-a469-49a8-aedc-cdbe40a90a45" data-file-name="app/metabolic-disorders/page.tsx">Book a Metabolic Health Consultation</span>
              </a>
              <a href="https://wa.me/919000767060?text=Hi, I would like to take the metabolic risk quiz" className="btn-ghost" data-unique-id="a4fcadbd-abda-40b0-902c-296c88b21a38" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="0df5d229-9152-4cc1-bfc4-1c32a64b5cb7" data-file-name="app/metabolic-disorders/page.tsx">Take the 3-Min Metabolic Risk Quiz</span>
              </a>
              <a href="tel:9000767060" className="btn-ghost" data-unique-id="3bae277d-0223-41bd-b68d-d8f33ba6e891" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="06c586fc-1bde-4449-8663-eda8e7a20c6e" data-file-name="app/metabolic-disorders/page.tsx">Download Our Smart Weight Loss Guide</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyFooter />
      <Footer />
    </div>;
}
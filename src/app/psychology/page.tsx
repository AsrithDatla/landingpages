import { type Metadata } from "next";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Footer } from "@/components/footer";
import { MobileStickyFooter } from "@/components/mobile-sticky-footer";
export const metadata: Metadata = {
  title: "Mental Health Is Health. Let's Heal, Together. - ReLiv Healthy",
  description: "Psychological Wellness & Behavioral Support - You're Not Alone. And You Don't Have to Carry It Alone."
};
const supportItems = ["Chronic Stress & Anxiety", "Anger Management", "Sleep Disturbances Related to Mental Overload", "ADHD (Children & Adults)", "Autism Spectrum Support (Early Intervention & Ongoing Guidance)", "Emotional Regulation & Social Skills Training", "Mood Disorders & Behavioral Concerns", "CBT (Cognitive Behavioral Therapy) Based Interventions", "Workplace Burnout, Relationship Stress, and Life Transitions", "Support for Parents & Caregivers"];
const holisticSupportSteps = ["1-on-1 Psychological Consults & Talk Therapy", "Cognitive Behavioral Therapy (CBT) Plans", "ADHD Assessments & Behavior Plans (Children/Adults)", "Autism Early Screening & Family Support Strategies", "Parent Training & Behavioral Coaching", "Emotion Regulation & Anger Diffusion Techniques", "Mindfulness, Sleep Hygiene & Stress Reset Plans", "Supportive Therapies alongside Physical Health Programs"];
const testimonials = [{
  quote: "I came for weight loss, but what truly helped me was managing the emotional stress I didn't even realize I was holding.",
  name: "Lalitha, 29"
}, {
  quote: "Our son is on the spectrum, and ReLiv gave us hope, tools, and clarity. We feel less alone.",
  name: "Parents of Arjun, Age 7"
}, {
  quote: "I never knew therapy could feel this safe. I've come a long way in managing my anger and reconnecting with my family.",
  name: "Manoj, 42"
}];
export default function PsychologyPage() {
  return <div className="min-h-screen bg-white pb-20 md:pb-0" data-unique-id="f796f2e9-42db-49d8-8adb-f16baf683dba" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-3 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20"></div>
        <div className="absolute inset-0 opacity-75" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=1080&fit=crop)',
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
                Psychological & Behavioral Wellness
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{
            color: 'var(--color-primary)'
          }}>
              Your Mind Matters. Let's Nurture It Together.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Because Mental Health Is Health
            </p>

            <div className="text-base sm:text-lg text-gray-800 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Anxiety, ADHD, stress, and emotional struggles can feel overwhelming—but you don't have to navigate them alone.
              </p>
              <p>
                At ReLiv Healthy, we offer a safe, judgment-free space where your mental well-being takes center stage.
              </p>
              <p>
                Our holistic approach combines evidence-based therapies with practical tools to help you build resilience, find balance, and thrive—not just cope.
              </p>
            </div>

            <a href="https://wa.me/919000767060?text=Hi, I would like to know more about psychological wellness and behavioral support services" className="btn-cta text-lg font-semibold" data-unique-id="04f1ee2b-5127-48e1-a72d-a60d2f9f3e1d" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="5f38c0fc-9b14-4064-a53c-da33144d88ed" data-file-name="app/psychology/page.tsx">
              Begin Your Journey to Mental & Emotional Balance
            </span></a>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
                Understanding Mental Wellness
              </h2>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                <p>
                  Mental health is the foundation of your overall well-being—it affects how you think, feel, and interact with the world around you.
                </p>
                <p>
                  At ReLiv Healthy, we understand that psychological challenges can impact every area of your life, from relationships to work performance and physical health.
                </p>
                <p>
                  Our compassionate, evidence-based approach helps you build resilience, develop coping strategies, and rediscover joy in your daily life.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6 lg:mt-0">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full max-w-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                  Common Concerns We Address
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  {supportItems.slice(0, 6).map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Our Evidence-Based Approach
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We combine clinical expertise with compassionate care to help you achieve meaningful, lasting change
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 sm:space-y-5">
                <p>
                  Our team uses evidence-based techniques like Cognitive Behavioral Therapy (CBT), mindfulness practices, and solution-focused therapy—all delivered with warmth, empathy, and cultural sensitivity.
                </p>
                <p>
                  We believe in a collaborative approach where you're an active participant in your healing journey. Together, we'll develop practical strategies tailored to your unique needs and goals.
                </p>
                <div className="bg-blue-50 p-4 sm:p-5 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-medium italic">
                    "This isn't just therapy. This is a path to self-awareness, healing, and actionable change."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&h=400&fit=crop" 
                  alt="Therapy session in a comfortable setting" 
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 sm:p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">Safe & Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Holistic Support */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Our Holistic Support Approach
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We address the whole person—mind, body, and emotions—for comprehensive healing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {holisticSupportSteps.map((step, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" 
                       style={{ backgroundColor: 'var(--color-primary)' }}>
                    {index + 1}
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hear From Our Clients */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
              Hear From Our Clients
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Real stories from people who have found hope and healing through our approach
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-8">
            <TestimonialSlider testimonials={testimonials} />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic mb-8">
              Names have been changed to protect privacy. All testimonials are from real clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                  In-Person Sessions
                </h3>
                <p className="text-gray-600 mb-4">
                  Walk into our calm, confidential studio in Banjara Hills for a peaceful therapy experience.
                </p>
                <div className="flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Banjara Hills, Hyderabad</span>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Virtual Counseling
                </h3>
                <p className="text-gray-600 mb-4">
                  Access professional support from the comfort and privacy of your own home.
                </p>
                <div className="flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h6l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <span>Secure Video Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
                Begin Your Journey to Mental & Emotional Balance
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Take the first step towards a healthier, happier you. Our team is here to support you every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/919000767060?text=Hi, I would like to book a mental wellness consultation" 
                  className="btn-cta text-base sm:text-lg font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200"
                >
                  Book a Consultation
                </a>
                <a 
                  href="tel:+919000767060" 
                  className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 text-base sm:text-lg font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200"
                >
                  Call Us: +91 90007 67060
                </a>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                All conversations are completely confidential. We're here to listen, not judge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyFooter />
      <Footer />
    </div>;
}
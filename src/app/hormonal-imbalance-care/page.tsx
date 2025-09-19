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
      <section className="relative min-h-screen flex items-center px-4 sm:px-8" data-unique-id="0eea3923-8e3e-4b98-a503-591260a33351" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20" data-unique-id="3482ad6b-693a-45bf-bc90-77f474d78752" data-file-name="app/hormonal-imbalance-care/page.tsx"></div>
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} data-unique-id="4aaa8b82-94cf-4998-b940-59fff1b31bf2" data-file-name="app/hormonal-imbalance-care/page.tsx"></div>
        
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10" data-unique-id="5f82c721-c09d-403c-93cf-07b2ed3e1a63" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <a href="https://relivhealthy.com/" className="block transition-opacity duration-200 hover:opacity-80" data-unique-id="c76c86dd-1ab7-4c62-bde0-40a26999d248" data-file-name="app/hormonal-imbalance-care/page.tsx">
            <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/4a7c818821764b5fc4ecca88e27e5a38.gif" alt="ReLiv Healthy Logo" className="h-12 w-auto sm:h-16" data-unique-id="e05bdcdc-4e2c-44d6-b4fb-02c8becdeebf" data-file-name="app/hormonal-imbalance-care/page.tsx" />
          </a>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-0" data-unique-id="9892e833-ba83-4342-87a8-b8944fb14498" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <div className="max-w-3xl" data-unique-id="296ae0d5-d274-499d-b5a4-0c24df3122a9" data-file-name="app/hormonal-imbalance-care/page.tsx">
            <div className="mb-4 sm:mb-6" data-unique-id="da0ba728-bf17-4379-8e3d-7880cbde6d32" data-file-name="app/hormonal-imbalance-care/page.tsx">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full" style={{
              backgroundColor: 'rgba(95, 147, 205, 0.1)',
              color: 'var(--color-secondary)'
            }} data-unique-id="1c9c432d-2c18-44c0-9afe-608287dbb6d2" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="24e84223-6abb-4942-b205-f452d94ff4f0" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Hormonal Imbalance Care
              </span></span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="28c52378-2d97-4848-9917-a4dcea00ba8b" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="8b2137e0-6ce7-43c1-b395-3ff571c070b5" data-file-name="app/hormonal-imbalance-care/page.tsx">
              Empowering You to Reclaim Balance, Naturally
            </span></h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed" data-unique-id="a5ce37d3-8314-4100-b935-1ff2def4b694" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="c0d06567-469e-46ec-95a2-789c626b6d80" data-file-name="app/hormonal-imbalance-care/page.tsx">
              Struggling with PCOD, PCOS, or Unexplained Infertility?
            </span></p>

            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4" data-unique-id="045cb0b5-b257-4a98-8868-28885945a864" data-file-name="app/hormonal-imbalance-care/page.tsx">
              <p data-unique-id="2bede688-f6ed-4a92-a1d6-04871c1851d0" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="2f1b3c89-c4e3-46b8-9d0a-b8067e2707d3" data-file-name="app/hormonal-imbalance-care/page.tsx">
                You're not alone—and you don't have to go through it alone either.
              </span></p>
              <p data-unique-id="95444798-94ab-47d8-8312-c21806f30dec" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="b0eb583a-eb57-4079-92d3-729edd11108d" data-file-name="app/hormonal-imbalance-care/page.tsx">
                At ReLiv Healthy, we understand how hormonal imbalances can affect your body, your mood, and your confidence. From irregular cycles and weight fluctuations to acne, hair loss, or fertility struggles—these are more than symptoms. They're signals your body is asking for help.
              </span></p>
              <p data-unique-id="3c533980-dc66-48cf-ba9d-d20318727767" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="10c12a72-9816-45e0-83e5-f9e187313074" data-file-name="app/hormonal-imbalance-care/page.tsx">
                We're here to listen, support, and guide you—not just with medication, but with a complete, root-cause focused approach to healing.
              </span></p>
            </div>
            
            <a href="#book" className="btn-cta text-base sm:text-lg font-semibold" data-unique-id="15fa0158-e0e8-4f48-980d-50b491ce3ce7" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="c2f73911-fa3a-481c-aec5-4b9883e0add2" data-file-name="app/hormonal-imbalance-care/page.tsx">
              Ready to take the first step?
            </span></a>
          </div>
        </div>
      </section>

      {/* Problem Intro */}
      <section className="py-12 px-4 sm:py-16 sm:px-8" data-unique-id="f6886ef8-8ca2-4b24-9b8a-60f7bb21f70f" data-file-name="app/hormonal-imbalance-care/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="e9c4a52f-9397-4397-b23c-df08a33d5f54" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-center" style={{
          borderLeft: `4px solid var(--color-secondary)`
        }} data-unique-id="1a9caf4e-3e44-4f35-a9f8-aa797eccc0a2" data-file-name="app/hormonal-imbalance-care/page.tsx">
            <div className="text-lg sm:text-xl text-gray-700 leading-relaxed" data-unique-id="f2092027-dd07-4295-a316-7b102e2f9276" data-file-name="app/hormonal-imbalance-care/page.tsx">
              <p className="mb-4" data-unique-id="47a25b19-5d3d-4bc3-a736-ac562b9b1615" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="0c0bee6f-0197-4bb2-b5da-0fce9dc87793" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Hormonal health isn't just about your cycle—it's about feeling whole, confident, and in control of your body again.
              </span></p>
              <p data-unique-id="2a9f6868-adf2-47bd-828d-462bb35b7184" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="617b50d3-b1bf-463a-b055-d0b38f3a398e" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Let's work together to restore that balance, naturally and sustainably.
              </span></p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-12 px-4 sm:py-16 sm:px-8 bg-gray-50" data-unique-id="6b813c29-5552-4d73-a358-3dd285f00d7d" data-file-name="app/hormonal-imbalance-care/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="aea7bd39-3519-417f-b238-153be831d80e" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="2e778a6d-f5d7-4e4a-9e35-82fb1a4b5f06" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="dc0032d6-1027-431a-94c6-34e6a3be9ef5" data-file-name="app/hormonal-imbalance-care/page.tsx">
            What We Treat
          </span></h2>
          <p className="text-lg sm:text-xl text-gray-700 text-center mb-8 sm:mb-12 leading-relaxed px-4" data-unique-id="bdb16066-c6a4-4717-9459-89f8785283df" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="72a95e83-adfc-42f6-9939-d7c9ee312dcd" data-file-name="app/hormonal-imbalance-care/page.tsx">
            We work with women experiencing:
          </span></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-unique-id="d2fc5562-f4fd-444a-a7ec-a0563ecfc2fc" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
            {treatmentItems.map((item, index) => <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200" style={{
            border: `1px solid rgba(95, 147, 205, 0.25)`
          }} data-unique-id="4b114b4f-ae8a-4d03-b199-1152c14b2e65" data-file-name="app/hormonal-imbalance-care/page.tsx">
                <div className="text-center" data-unique-id="ef12eb60-9794-4012-a1ff-260e8f3b59f5" data-file-name="app/hormonal-imbalance-care/page.tsx">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed" data-unique-id="c49141a9-f1b4-48f9-81f5-5d43bf225281" data-file-name="app/hormonal-imbalance-care/page.tsx" data-dynamic-text="true">
                    {item}
                  </h3>
                </div>
              </div>)}
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

      {/* CTA Banner */}
      <section id="book" className="py-12 px-4 sm:py-16 sm:px-8" data-unique-id="e0b0788f-d758-4e2e-a779-d2c03518d9bf" data-file-name="app/hormonal-imbalance-care/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="f10e9668-f5c4-4bcd-81be-9291ce7e8401" data-file-name="app/hormonal-imbalance-care/page.tsx">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg text-center" data-unique-id="7c7c9137-0edb-4cf3-8995-24f144e91800" data-file-name="app/hormonal-imbalance-care/page.tsx">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="18fbab10-2fc9-4283-bcc1-d557afd6cfda" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="f00359cd-ee2a-4cfb-8b5b-cb9560df2e8d" data-file-name="app/hormonal-imbalance-care/page.tsx">
              Ready to take the first step?
            </span></h2>
            
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto" data-unique-id="3e74ab1f-67ea-4f21-af99-a7953f0b263a" data-file-name="app/hormonal-imbalance-care/page.tsx">
              <a href="#book" className="btn-cta w-full sm:w-auto" data-unique-id="49f7f77d-d7d6-4da9-808e-7dc79934c5ed" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="679d504d-2f6a-4b1b-af54-d392ecf5a19e" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Book a Free Discovery Call
              </span></a>
              <a href="#book" className="btn-ghost w-full sm:w-auto" data-unique-id="1113e21f-711c-464c-9e18-625669a2701a" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="aee86368-a308-4a99-99f2-4f2051b65c59" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Schedule a Full Hormonal Health Assessment
              </span></a>
              <a href="#book" className="btn-ghost w-full sm:w-auto" data-unique-id="2adf648e-4256-41b8-a83b-e754e257cb24" data-file-name="app/hormonal-imbalance-care/page.tsx"><span className="editable-text" data-unique-id="4ca91469-8872-4e92-989a-cde439280612" data-file-name="app/hormonal-imbalance-care/page.tsx">
                Download Our PCOS Wellness Guide
              </span></a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}
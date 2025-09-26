import { type Metadata } from "next";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Footer } from "@/components/footer";
import { MobileStickyFooter } from "@/components/mobile-sticky-footer";
import Logo from "@/components/Logo";
export const metadata: Metadata = {
  title: "Move Freely. Live Fully. Without Chronic Pain. - ReLiv Healthy",
  description: "Musculoskeletal & Neurological Care - Chronic Pain Doesn't Have to Be Your New Normal"
};
const whatWeHelpWithItems = ["Arthritis (Osteoarthritis, Rheumatoid Arthritis, Early-stage joint wear)", "Gout & Uric Acid Imbalance", "Neuropathy (Diabetic, Post-COVID, Post-surgical, Nutritional)", "Chronic Joint & Nerve Pain", "Numbness, Tingling or Burning Sensations", "Mobility Limitations and Muscle Weakness", "Morning Stiffness or Recurrent Swelling in Joints", "Balance & Gait Issues in Older Adults"];
const recoveryPathSteps = ["Comprehensive Joint & Nerve Evaluation", "Anti-Inflammatory Nutrition Guidance", "Uric Acid & Inflammatory Marker Tracking", "Targeted IV Therapies for Nerve & Tissue Repair", "Lifestyle Adjustments for Joint Longevity & Gait Training", "Fall Prevention, Foot Care & Mobility Support Plans", "Pain Management through Physical Modalities (Non-invasive)"];
const advancedTherapies = ["Infrared Sauna", "Cryotherapy", "Smart Muscle Recovery"];
const testimonials = [{
  quote: "I had constant foot pain from diabetic neuropathy. Within 2 months, the burning sensation reduced drastically.",
  name: "Mr. Ravi, 58"
}, {
  quote: "I couldn't kneel or climb stairs. Their arthritis plan gave me a new lease on daily living.",
  name: "Saroja, 65"
}, {
  quote: "I was on gout medication for years. With their plan, my uric acid is normal—and I've been flare-free for 6 months.",
  name: "Sameer, 42"
}];
export default function MusculoskeletalPage() {
  return <div className="min-h-screen bg-white pb-20 md:pb-0" data-unique-id="69f04898-0f41-4079-b0f9-8834b1041106" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-3 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20"></div>
        <div className="absolute inset-0 opacity-70" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop)',
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
                Musculoskeletal & Neurological Care
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{
              color: 'var(--color-primary)'
            }}>
              Move Freely. Live Fully. Without Chronic Pain.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Chronic Pain Doesn't Have to Be Your New Normal
            </p>

            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4">
              <p>
                Whether it's joint stiffness, burning feet, swelling, or loss of mobility—persistent pain is exhausting.
              </p>
              <p>
                But here's the truth: your body can still heal, if we listen to it the right way.
              </p>
              <p>
                At ReLiv Healthy, we care deeply about helping you move better, feel stronger, and reclaim your daily freedom—without dependency on painkillers or invasive procedures.
              </p>
            </div>
            
            <a href="https://wa.me/919000767060?text=Hi, I would like to know more about musculoskeletal and neurological care for chronic pain" className="btn-cta text-lg font-semibold" data-unique-id="77ac7f32-35ba-4532-aa77-c44ac9056e15" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="8a07995b-2c05-4b63-ac56-798d80911ff5" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              Take Your First Step Toward Pain-Free Living
            </span></a>
          </div>
        </div>
      </section>

      {/* Problem Intro */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8" data-unique-id="36a359a0-128d-4546-afe3-c8330ffea457" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="0330bbd7-6fd7-4525-a7c0-279326c5a57b" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center" style={{
          borderLeft: `4px solid var(--color-secondary)`
        }} data-unique-id="34cc1240-8b52-4e5e-b55c-980601e5ccd9" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            <div className="text-xl text-gray-700 leading-relaxed" data-unique-id="09f6839e-f2f5-49fb-a571-505197f82e50" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              <p className="mb-4" data-unique-id="f211b713-1df7-49ca-8b6c-a0e3512825b1" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="18a4ef54-e986-4edd-a490-e65a1c9bc058" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                Chronic pain is more than discomfort—it's a thief that steals your confidence, energy, and joy in movement.
              </span></p>
              <p data-unique-id="e7be58b0-0512-4fad-a415-fe9b9a504eb9" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="a9fd36f2-a2ae-4b28-98b3-215326952a0f" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                But your story doesn't end here. Recovery is possible, and we're here to guide you every step of the way.
              </span></p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50" data-unique-id="31d8d648-bf2e-4282-b3fd-9e2dd7399629" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="88c3ed95-cbd8-4fad-a325-2204f283da98" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="fc72bd7b-cf85-410b-92e8-0d9529d155bf" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="3765a7a7-41b2-4072-9477-534f1460d53e" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            What We Help With
          </span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="61fe0ea1-f01e-4785-bfa2-869e1258eabc" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
            {whatWeHelpWithItems.map((item, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200" style={{
            border: `1px solid rgba(95, 147, 205, 0.25)`
          }} data-unique-id="6142afe1-1175-4f27-99a9-793a7231c3e9" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                <div className="text-center" data-unique-id="0869a364-6265-430c-bd39-7be62c1fcba4" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed" data-unique-id="6be45197-9068-44fc-a40d-103996b18376" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
                    {item}
                  </h3>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8" data-unique-id="fe9f65e6-4670-440f-9c46-2c4f482d2924" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="98ae95bf-8be1-49c3-87ad-4535e374dd21" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="ed9e98d5-d085-447d-b17b-5d8205e9dec1" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="f6ca065e-e473-4cbc-bc47-7d6b2634ccc4" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            Our Approach: Integrated & Evidence-Based
          </span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-unique-id="5904b41d-f71a-4f9b-8e22-0e3651e1237d" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            <div data-unique-id="41639331-c730-436a-ad2a-af5173adbe30" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-unique-id="bdf9c6f0-3c96-4713-8dfe-13137e9fc85d" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="5e8e68fa-066f-48e5-a657-637470548601" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                At ReLiv Healthy, we combine modern therapies, ancient principles, and tech-assisted care to create non-invasive, personalized pain management plans.
              </span></p>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-unique-id="9e705752-932f-4c69-a937-025b08bbe804" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="1d76c3e8-06a1-4a62-8ffe-b7b3ddac75b8" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                We look beyond symptom relief—to address inflammation, nerve damage, uric acid imbalance, and metabolic triggers that are often overlooked.
              </span></p>
            </div>
            <div className="flex justify-center" data-unique-id="2023b30a-e962-419e-96ad-674a0a68d848" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=400&fit=crop" alt="Integrated healthcare approach" className="rounded-2xl shadow-lg" data-unique-id="0c81cecb-3908-4a29-80f4-95aaf411e7aa" data-file-name="app/musculoskeletal-neurological-care/page.tsx" />
            </div>
          </div>
        </div>
      </section>

      {/* Your Recovery Path */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50" data-unique-id="0c5760cd-4d9b-45bd-ac26-0f995c256d27" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="198ed29b-856c-48ca-a95d-ecef7fb11163" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="b1651597-2878-4e85-89ff-a1610003dcab" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="1043268b-c007-43ca-8a08-a6b4d16aa5c6" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            Your Recovery Path May Include:
          </span></h2>
          
          <div className="space-y-6 mb-8" data-unique-id="dd12bbae-cfbb-45a1-a0ff-b1d2047fef64" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
            {recoveryPathSteps.map((step, index) => <div key={index} className="flex items-start gap-6" data-unique-id="125abe96-607e-4312-9302-5bb1051b7474" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
              backgroundColor: 'var(--color-primary)'
            }} data-unique-id="e96eeae8-eb2a-493a-9c95-801ab8cb85bb" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
                  {index + 1}
                </div>
                <span className="text-lg text-gray-700 leading-relaxed" data-unique-id="dfd71b7d-9982-45c9-a2ed-6423bad14aae" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">{step}</span>
              </div>)}
          </div>

          {/* Advanced Therapies */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12" data-unique-id="514304e0-b7c0-4827-ad0f-33c99e961b45" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="e5057dfd-3df1-411d-b521-05f277daa5eb" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="e31abcbf-38bd-444d-a9ba-351a87d5be7c" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              Infrared Sauna, Cryotherapy & Smart Muscle Recovery
            </span></h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="b7920cc9-1b08-4a82-a8f2-ea6a589f1fd8" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">
              {advancedTherapies.map((therapy, index) => <div key={index} className="text-center rounded-xl p-6" style={{
              backgroundColor: 'rgba(95, 147, 205, 0.1)'
            }} data-unique-id="15c5f295-3b0c-45a0-8bd5-40059e8e725e" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                  <h4 className="text-lg font-semibold text-gray-800" data-unique-id="2bf1e8af-3697-488e-bfd8-42dc6c193036" data-file-name="app/musculoskeletal-neurological-care/page.tsx" data-dynamic-text="true">{therapy}</h4>
                </div>)}
            </div>
          </div>

          <div className="text-center" data-unique-id="757f72b8-1722-43bf-9760-0b7114114d67" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            <blockquote className="text-2xl font-medium italic mb-4" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="ef9a3b98-f7b8-439c-bd67-f354f9a1ca4b" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="8be3175b-4102-46ef-a613-4db5308056c8" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              No unnecessary medications. No surgical push.
            </span></blockquote>
            <p className="text-xl text-gray-700 font-medium" data-unique-id="000edf28-971e-4037-a693-8c715c7adeb4" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="8db87cb7-7dcf-4ce5-9470-d213db71ae2f" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              Just a smarter path to mobility and comfort.
            </span></p>
          </div>
        </div>
      </section>

      {/* Client Stories of Strength */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8" data-unique-id="07c0bf12-d725-466e-ba28-bbee895f3136" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="3e6d11fa-b251-4ebc-9668-67d8de42e0b7" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="b768daee-029e-405f-96c1-748cd718c570" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="4356c0b4-69f7-4b12-b6d0-4bff04955847" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            Client Stories of Strength
          </span></h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Movement Is Medicine */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Movement Is Medicine—But Only When It's the Right Kind
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just focus on pain. We focus on you—your movement, comfort, goals, and future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>Personalized Movement Plans</h3>
              <p className="text-gray-600">
                Customized exercise programs designed specifically for your condition, mobility level, and recovery goals.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>Advanced Recovery Therapies</h3>
              <p className="text-gray-600">
                Access to cutting-edge treatments like cryotherapy and infrared sauna to accelerate healing and reduce inflammation.
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-4" style={{ color: 'var(--color-primary)' }}>
              Visit Our Movement-Optimized Wellness Studio in Banjara Hills
            </h3>
            <p className="text-center text-gray-600">
              Experience personalized care in our state-of-the-art facility, designed to help you move better and feel better—naturally and effectively.
            </p>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Results without surgeries. Relief without dependency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="book" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8" data-unique-id="3bcdfc0d-e3c9-4e7f-afc1-49d7211d834f" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="d7520ac4-1701-4a93-b3e7-7ba64f68e2c8" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center" data-unique-id="67c75cce-9b6b-437b-bc54-c0745c9aa2fb" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="b3049a71-38bf-48b4-8fc7-a48eee86387f" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="6e250896-36d6-4487-ac7d-777ac3f56231" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              Take Your First Step Toward Pain-Free Living
            </span></h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-unique-id="dbfdc034-4eca-45e3-8b0f-c5ce0aa035c9" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
              <a href="https://wa.me/919000767060?text=Hi, I would like to book a joint and nerve health assessment" className="btn-cta" data-unique-id="80fc7038-b3f0-4629-a456-caee5f711d1a" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="9fc24aef-62f6-4a19-8230-be01ee755368" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                Book a Joint & Nerve Health Assessment
              </span></a>
              <a href="https://wa.me/919000767060?text=Hi, I would like to download the arthritis and gout wellness guide" className="btn-ghost" data-unique-id="98af188d-2284-4c9d-b3fb-2452c3a2f54c" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="521bd816-25d2-4d76-a3dd-31a7d2b1dfc6" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                Download Our Arthritis & Gout Wellness Guide
              </span></a>
              <a href="tel:9000767060" className="btn-ghost" data-unique-id="6e989a9d-3b85-4227-bc77-8622953ee9b4" data-file-name="app/musculoskeletal-neurological-care/page.tsx"><span className="editable-text" data-unique-id="45568717-aa18-4f3e-9d38-b668abdc59dd" data-file-name="app/musculoskeletal-neurological-care/page.tsx">
                Talk to Our Pain Recovery Experts
              </span></a>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyFooter />
      <Footer />
    </div>;
}
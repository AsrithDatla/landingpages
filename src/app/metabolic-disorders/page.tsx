import { type Metadata } from "next";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Footer } from "@/components/footer";
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
  return <div className="min-h-screen bg-white" data-unique-id="2c65e15a-98c4-4f21-9dfa-f17be262e9fe" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-8" data-unique-id="95491220-c004-457c-b2db-223fb986a023" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20" data-unique-id="fdf5917e-ce17-4dcd-b8ae-07ac301c8a46" data-file-name="app/metabolic-disorders/page.tsx"></div>
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} data-unique-id="741d1713-f311-4fde-8eaa-98f81b1fd82f" data-file-name="app/metabolic-disorders/page.tsx"></div>
        
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10" data-unique-id="7981b099-a1e8-46d8-b5b0-2993b3068cf3" data-file-name="app/metabolic-disorders/page.tsx">
          <a href="https://relivhealthy.com/" className="block transition-opacity duration-200 hover:opacity-80" data-unique-id="b639e41e-0095-409b-a5c4-a3bed6e7a21d" data-file-name="app/metabolic-disorders/page.tsx">
            <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/4a7c818821764b5fc4ecca88e27e5a38.gif" alt="ReLiv Healthy Logo" className="h-12 w-auto sm:h-16" data-unique-id="5dc2ba30-9619-476c-98ef-82bf45f89d94" data-file-name="app/metabolic-disorders/page.tsx" />
          </a>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-0" data-unique-id="981cfd34-951e-4809-9364-2748a2a67b46" data-file-name="app/metabolic-disorders/page.tsx">
          <div className="max-w-3xl" data-unique-id="3fc081c4-36dc-4592-932b-b23019a11528" data-file-name="app/metabolic-disorders/page.tsx">
            <div className="mb-4 sm:mb-6" data-unique-id="1afb988d-f62f-49b5-9c7a-09219e0f0f68" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full" style={{
              backgroundColor: 'rgba(95, 147, 205, 0.1)',
              color: 'var(--color-secondary)'
            }} data-unique-id="a713fc67-6a6c-46fc-9fe7-5d7e5f973313" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="e3aa2bb3-b717-4aed-8972-3a0a659dcdff" data-file-name="app/metabolic-disorders/page.tsx">Metabolic Health & Weight Management</span>
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="a5ecf8e3-e43f-485c-8db8-de50d6656561" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="83a60018-3ded-4ab8-adeb-b5b9ead72cac" data-file-name="app/metabolic-disorders/page.tsx">Because Sustainable Health Is More Than Just Numbers</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed" data-unique-id="c07331ff-1b81-48a2-b1ab-79790c2f8931" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="b3f5e679-fda5-46fc-8bf1-8f244358eafc" data-file-name="app/metabolic-disorders/page.tsx">Tired of Trying Everything and Still Feeling Stuck?</span>
            </p>

            <div className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed space-y-3 sm:space-y-4" data-unique-id="9e1df5f1-aec5-4426-80a2-460c7aacfafe" data-file-name="app/metabolic-disorders/page.tsx">
              <p data-unique-id="9794afe1-87c2-4011-a865-bb31c8ff6196" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="c5f05e46-d376-422c-9f94-61bfaca0c877" data-file-name="app/metabolic-disorders/page.tsx">If you've been battling weight gain, thyroid issues, diabetes, or blood pressure fluctuations—you know it's not just about calories or pills.</span>
              </p>
              <p data-unique-id="25c508f8-437f-4dd1-92d3-f98e41c73fe0" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="1c2d8c16-ed5f-42b4-bb7c-1c0c440bff3c" data-file-name="app/metabolic-disorders/page.tsx">Your body is complex.</span>
              </p>
              <p data-unique-id="fb257247-4900-4d46-9067-8f17f40a80e8" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="b83bd281-6504-4d15-be9d-24acaad18ef4" data-file-name="app/metabolic-disorders/page.tsx">Your health deserves more than shortcuts.</span>
              </p>
              <p data-unique-id="4454a7b3-4e4d-41b1-b6dc-5a890d52256d" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="28548ee1-75ae-4440-a2a6-30e74bfb9973" data-file-name="app/metabolic-disorders/page.tsx">At ReLiv Healthy, we help you understand why your body is resisting change—and what you can do to unlock sustainable healing, energy, and confidence.</span>
              </p>
            </div>
            
            <a href="#book" className="btn-cta text-base sm:text-lg font-semibold" data-unique-id="5d09fbfb-7e31-4d76-8149-eb66b7a4b060" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="8e689a86-540a-45d7-a613-482ed04e4bc2" data-file-name="app/metabolic-disorders/page.tsx">Ready to Get Started?</span>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Intro */}
      <section className="py-16 px-8" data-unique-id="3a2b2e3f-7737-4234-bb05-33a15839a925" data-file-name="app/metabolic-disorders/page.tsx">
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
      <section className="py-16 px-8 bg-gray-50" data-unique-id="18286de2-325f-4d34-80ae-39658241272b" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="c1881b4f-af9d-41fd-86f7-f4a16c1888ed" data-file-name="app/metabolic-disorders/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-8" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="809cd443-2d03-41f3-8bc3-a8106b643618" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="92a6e15e-ce95-4d89-b873-fbd83060504c" data-file-name="app/metabolic-disorders/page.tsx">What We Support</span>
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 leading-relaxed" data-unique-id="72bca568-5d69-48db-a52d-9bf3dcafd07e" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="55619a58-90d0-4559-aec2-e9565ce35912" data-file-name="app/metabolic-disorders/page.tsx">We work with individuals dealing with:</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="768227ca-96c8-44a2-b2f0-f37c75e4ff3b" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
            {supportItems.map((item, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200" style={{
            border: `1px solid rgba(95, 147, 205, 0.25)`
          }} data-unique-id="73b5cbef-4974-4dd9-9501-b20bcbd1b095" data-file-name="app/metabolic-disorders/page.tsx">
                <div className="text-center" data-unique-id="a58bd01e-20d4-470e-bf58-0957d7af9c47" data-file-name="app/metabolic-disorders/page.tsx">
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed" data-unique-id="cc9ec2ff-4837-4e5a-bf9b-4e73ec01a97d" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
                    {item}
                  </h3>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* A Whole-Body, Root-Cause Approach */}
      <section className="py-16 px-8" data-unique-id="5687c7a5-4da8-4c7a-8c26-9bb69b047744" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="259ab0f8-bc9c-416a-9d95-0a136508320f" data-file-name="app/metabolic-disorders/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-12" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="d9b7396c-a7e7-4fd1-9658-c1b529cee375" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="c31ee2d5-914b-48f1-ae04-e1f3c401efb3" data-file-name="app/metabolic-disorders/page.tsx">A Whole-Body, Root-Cause Approach</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center" data-unique-id="2acb8f7a-5ca2-4b1b-892a-7973ad4a990e" data-file-name="app/metabolic-disorders/page.tsx">
            <blockquote className="text-2xl font-medium italic pl-6 border-l-4 leading-relaxed mb-8" style={{
            borderColor: 'var(--color-secondary)',
            color: 'var(--color-primary)'
          }} data-unique-id="e1e89524-0020-4f9e-8206-f9907b1d0327" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="32fe4e0a-d95b-4544-a57d-2b6f0a0c5a3b" data-file-name="app/metabolic-disorders/page.tsx">We don't believe in crash diets or generic prescriptions.</span>
            </blockquote>
            <p className="text-xl text-gray-700 leading-relaxed" data-unique-id="87f37d31-75ed-451a-a39a-6f70119a6864" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="e3c9fe87-3902-4ee4-9953-5289b19f2b68" data-file-name="app/metabolic-disorders/page.tsx">We believe in helping your body heal from the inside out—through real science, real food, real movement, and real support.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Your Personalized Care Plan */}
      <section className="py-16 px-8 bg-gray-50" data-unique-id="33fe6915-49a9-4e59-a766-e4bf2b64f6a2" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="65148fc5-c8b7-45df-8442-1dd7dd10f7f4" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
          <h2 className="text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="5835e0c9-543e-496f-9e68-57aa82e37085" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="cd32120e-68aa-48fd-88ae-66698484a0e1" data-file-name="app/metabolic-disorders/page.tsx">Your Personalized Care Plan May Include:</span>
          </h2>
          
          <div className="space-y-6 mb-8" data-unique-id="d5bfd8b6-ea96-43f0-9e1c-d4faa85eef03" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
            {carePlanSteps.map((step, index) => <div key={index} className="flex items-start gap-6" data-unique-id="1d53ad80-0147-4501-9623-8467513ec4ff" data-file-name="app/metabolic-disorders/page.tsx">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
              backgroundColor: 'var(--color-primary)'
            }} data-unique-id="f0bf1799-4046-4566-b367-64983f8073dc" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
                  {index + 1}
                </div>
                <span className="text-lg text-gray-700 leading-relaxed" data-unique-id="7703caf4-67c1-4229-ac9b-d7830f3e29ce" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">{step}</span>
              </div>)}
          </div>

          {/* Tech-Assisted Recovery */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12" data-unique-id="5d8117bb-1605-47ff-a45a-2f28c1065167" data-file-name="app/metabolic-disorders/page.tsx">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="e94172df-e1fa-4c44-8c45-677a2069524e" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="85103547-f731-4af9-8ebc-839996f933d3" data-file-name="app/metabolic-disorders/page.tsx">Infrared Sauna, Cryotherapy & EM Sculpt (Tech-Assisted Recovery)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-unique-id="b665446e-ae77-4bbc-bb0d-cf15c1a6188a" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">
              {techAssistedItems.map((item, index) => <div key={index} className="text-center rounded-xl p-6" style={{
              backgroundColor: 'rgba(95, 147, 205, 0.1)'
            }} data-unique-id="ab07b987-07cc-47cb-9067-e67298bc32cf" data-file-name="app/metabolic-disorders/page.tsx">
                  <h4 className="text-lg font-semibold text-gray-800" data-unique-id="bb0948af-bd14-40ed-9a55-c6ba73bfd84b" data-file-name="app/metabolic-disorders/page.tsx" data-dynamic-text="true">{item}</h4>
                </div>)}
            </div>
          </div>

          <p className="text-xl text-gray-700 text-center font-medium" data-unique-id="284c0ae1-9122-43b0-ad26-e4ea4672f942" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="62ec7b7b-7bf5-490c-85a3-06eb57ce0eb7" data-file-name="app/metabolic-disorders/page.tsx">Whether you're living with hypothyroidism, early-stage diabetes, or just want to feel like yourself again—we've got you.</span>
          </p>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-16 px-8" data-unique-id="00c13456-55a2-4efe-8b8a-869daa6b6a7b" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="d9ce1fc9-ff11-4b79-94da-6bc3d66756fe" data-file-name="app/metabolic-disorders/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="52b55519-8319-4387-8081-ca98acb9148c" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="ffb6c282-34df-4633-b3db-8f36db40c7b5" data-file-name="app/metabolic-disorders/page.tsx">Stories of Change</span>
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Empower Your Metabolism */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-50 to-purple-50" data-unique-id="38c587dd-4d6a-4281-b1b7-99081e51ea3d" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-4xl mx-auto text-center" data-unique-id="95fffe42-4be8-45d9-afc9-57d4a8067670" data-file-name="app/metabolic-disorders/page.tsx">
          <h2 className="text-4xl font-bold mb-8" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="d43b8ebb-67e8-456e-8166-80b981994a4f" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="8369f1a0-f137-4378-a7fc-e698fca2d0ac" data-file-name="app/metabolic-disorders/page.tsx">Empower Your Metabolism. Reclaim Your Life.</span>
          </h2>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed" data-unique-id="f3d5a4ac-227e-472e-af45-5a66ef907d57" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="fbcab726-5559-4b41-9f4e-5aa5714de4fd" data-file-name="app/metabolic-disorders/page.tsx">This isn't about quick fixes—it's about long-term wellness built around you.</span>
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto mb-6" data-unique-id="2f8b67de-890a-4b13-a0d1-4e6a2e3c7dc2" data-file-name="app/metabolic-disorders/page.tsx">
            <p className="text-xl font-semibold mb-2" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="aafbb497-c630-4ad1-afcd-3366e10cad5d" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="920a4bde-c96a-4408-bf7c-208c1f5d3aee" data-file-name="app/metabolic-disorders/page.tsx">Visit our Banjara Hills studio or opt for virtual care</span>
            </p>
          </div>
          <p className="text-lg text-gray-600" data-unique-id="4c73ae47-00e3-43c3-ad69-05f0de533be2" data-file-name="app/metabolic-disorders/page.tsx">
            <span className="editable-text" data-unique-id="625f49ae-532d-4de8-8055-508b59a696c7" data-file-name="app/metabolic-disorders/page.tsx">Real guidance, science-backed interventions, and sustainable outcomes</span>
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="book" className="py-16 px-8" data-unique-id="67bb00bc-b31e-4b02-b0ca-4141654baff6" data-file-name="app/metabolic-disorders/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="55b212b4-3433-4635-b6bc-4528acc44fe3" data-file-name="app/metabolic-disorders/page.tsx">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center" data-unique-id="c70e6e5e-2890-4163-8d16-88d1c265d735" data-file-name="app/metabolic-disorders/page.tsx">
            <h2 className="text-4xl font-bold mb-12" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="8198552c-c1bf-443e-86a2-167681a1706c" data-file-name="app/metabolic-disorders/page.tsx">
              <span className="editable-text" data-unique-id="ff6b44f8-9c06-4afd-8647-c5f4ef46b3f4" data-file-name="app/metabolic-disorders/page.tsx">Ready to Get Started?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-unique-id="74961727-0a1e-40b3-8884-348e88647be8" data-file-name="app/metabolic-disorders/page.tsx">
              <a href="#book" className="btn-cta" data-unique-id="253c4840-bb97-4a1e-91a8-e344dfdf8829" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="a7f52aa9-a469-49a8-aedc-cdbe40a90a45" data-file-name="app/metabolic-disorders/page.tsx">Book a Metabolic Health Consultation</span>
              </a>
              <a href="#book" className="btn-ghost" data-unique-id="a4fcadbd-abda-40b0-902c-296c88b21a38" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="0df5d229-9152-4cc1-bfc4-1c32a64b5cb7" data-file-name="app/metabolic-disorders/page.tsx">Take the 3-Min Metabolic Risk Quiz</span>
              </a>
              <a href="#book" className="btn-ghost" data-unique-id="3bae277d-0223-41bd-b68d-d8f33ba6e891" data-file-name="app/metabolic-disorders/page.tsx">
                <span className="editable-text" data-unique-id="06c586fc-1bde-4449-8663-eda8e7a20c6e" data-file-name="app/metabolic-disorders/page.tsx">Download Our Smart Weight Loss Guide</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}
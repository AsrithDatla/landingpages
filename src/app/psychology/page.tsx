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
      <section className="relative min-h-screen flex items-center px-4 sm:px-8" data-unique-id="e95ca0b0-a153-49a3-a4eb-c419cc4f9129" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/20" data-unique-id="50e589ac-95dd-456d-ac64-cc8258d96fe8" data-file-name="app/psychology/page.tsx"></div>
        <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} data-unique-id="60b5df7e-43d8-4557-849e-795b7e82a774" data-file-name="app/psychology/page.tsx"></div>
        
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10" data-unique-id="340abad3-dd88-443d-b3ae-430f90b4ab24" data-file-name="app/psychology/page.tsx">
          <a href="https://relivhealthy.com/" className="block transition-opacity duration-200 hover:opacity-80" data-unique-id="41c49d4d-35de-43f5-9d8f-32db6d0a38b8" data-file-name="app/psychology/page.tsx">
            <img src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/4a7c818821764b5fc4ecca88e27e5a38.gif" alt="ReLiv Healthy Logo" className="h-12 w-auto sm:h-16" data-unique-id="4e5f8762-0dff-48c0-8058-4ba63c5fd010" data-file-name="app/psychology/page.tsx" />
          </a>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto" data-unique-id="10337f85-c21c-4a60-b96b-b2a06917f688" data-file-name="app/psychology/page.tsx">
          <div className="max-w-3xl" data-unique-id="d58f0fa9-ddf8-4935-a71e-555f0c00913f" data-file-name="app/psychology/page.tsx">
            <div className="mb-6" data-unique-id="dd3c68a4-cb25-4026-bc39-92cc8f629e3c" data-file-name="app/psychology/page.tsx">
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full" style={{
              backgroundColor: 'rgba(95, 147, 205, 0.1)',
              color: 'var(--color-secondary)'
            }} data-unique-id="37d14b48-962d-4053-bad9-be1bf376c131" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="8d211b92-c3c0-4ab4-96fe-dda990fcf5af" data-file-name="app/psychology/page.tsx">
                Psychological Wellness & Behavioral Support
              </span></span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="1f54ede2-f029-496e-a32e-f6d15048ba32" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="d4fce490-5262-48c4-a24b-f2f01b9ebe5a" data-file-name="app/psychology/page.tsx">
              Mental Health Is Health. Let's Heal, Together.
            </span></h1>
            
            <p className="text-2xl font-semibold text-gray-700 mb-6 leading-relaxed" data-unique-id="24992b94-fe5b-4655-b190-42239235538d" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="a7ad828e-ea0b-4e5e-bc56-a84890958940" data-file-name="app/psychology/page.tsx">
              You're Not Alone. And You Don't Have to Carry It Alone.
            </span></p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-unique-id="8d943b1f-10c6-4c90-86e8-956108bcd75a" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="99baa311-02a0-4ee8-b575-080c9b071919" data-file-name="app/psychology/page.tsx">
              Whether you're dealing with chronic stress, anxiety, anger issues, attention challenges—or parenting a child with ADHD or on the autism spectrum—you deserve care that sees the full picture.
            </span></p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed" data-unique-id="aa92bb15-765b-45ba-b806-580b6cb240da" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="fd0f9dbe-ab88-4854-a545-d6f70e6ab9c5" data-file-name="app/psychology/page.tsx">
              At ReLiv Healthy, we bring together clinical understanding and compassionate listening to support emotional wellness, behavioral health, and long-term resilience for individuals and families.
            </span></p>
            
            <a href="https://wa.me/919000767060?text=Hi, I would like to know more about psychological wellness and behavioral support services" className="btn-cta text-lg font-semibold" data-unique-id="04f1ee2b-5127-48e1-a72d-a60d2f9f3e1d" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="5f38c0fc-9b14-4064-a53c-da33144d88ed" data-file-name="app/psychology/page.tsx">
              Begin Your Journey to Mental & Emotional Balance
            </span></a>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="py-16 px-8 bg-gray-50" data-unique-id="ab8fa175-f008-486d-9d9a-eb48b5e3cfe8" data-file-name="app/psychology/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="89e6711b-aaec-4fa9-938a-6be9f5439727" data-file-name="app/psychology/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="8c4b4959-60f2-409f-8d57-c2a016430b57" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="5367ee47-ae82-4e11-b6db-4dae35dcf191" data-file-name="app/psychology/page.tsx">
            What We Support
          </span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-unique-id="9823b1c5-51b0-45cf-a485-c7fd13897773" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">
            {supportItems.map((item, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200" style={{
            border: `1px solid rgba(95, 147, 205, 0.25)`
          }} data-unique-id="ff8f4f37-1ee9-4ecd-a799-a331e1d71f6e" data-file-name="app/psychology/page.tsx">
                <div className="text-center" data-unique-id="ef10fb2f-5b44-4174-910e-b23edc8f5275" data-file-name="app/psychology/page.tsx">
                  <h3 className="text-lg font-semibold text-gray-900" data-unique-id="7470fe6f-5193-44af-bcd4-0bd55698dd12" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">
                    {item}
                  </h3>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Therapy That Listens */}
      <section className="py-16 px-8" data-unique-id="eb4e296a-ca69-4699-b3b7-fbfaaa15a1c6" data-file-name="app/psychology/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="5eeeabc4-3b22-48c0-8a43-509804b68132" data-file-name="app/psychology/page.tsx">
          <h2 className="text-4xl font-bold mb-12" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="12d3d4c0-c200-425a-a7bd-91fddf3cc1f9" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="83006290-ab0e-42e0-b9c5-4a641e64f730" data-file-name="app/psychology/page.tsx">
            Therapy That Listens—and Then Equips You
          </span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-unique-id="7d2f4fc8-e6b7-4af1-b7c5-97b5cd2e9882" data-file-name="app/psychology/page.tsx">
            <div data-unique-id="1a891c06-8ed2-42cc-a8be-bde57c611e72" data-file-name="app/psychology/page.tsx">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed" data-unique-id="eebcf313-843e-468d-a35f-a343110286bf" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="6319be71-a6cb-4fe2-b6c0-ee04e2c7e262" data-file-name="app/psychology/page.tsx">
                Our team uses evidence-based techniques like CBT, behavioral planning, social skill building, and emotional reframing—with a warm, personalized, and trauma-sensitive approach.
              </span></p>
              <blockquote className="text-2xl font-medium italic pl-6 border-l-4 leading-relaxed" style={{
              borderColor: 'var(--color-secondary)',
              color: 'var(--color-primary)'
            }} data-unique-id="63322dd0-3581-496b-b080-135e81e12bde" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="5c90de92-fc59-4189-8f52-c11c2e906814" data-file-name="app/psychology/page.tsx">
                This isn't just therapy. This is a path to self-awareness, healing, and actionable change.
              </span></blockquote>
            </div>
            <div className="flex justify-center" data-unique-id="f17d1bff-5119-4fab-8d3b-4b13d186516a" data-file-name="app/psychology/page.tsx">
              <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&h=400&fit=crop" alt="Peaceful therapy session" className="rounded-2xl shadow-lg" data-unique-id="f72330e7-9590-4985-a491-2cad75cd843f" data-file-name="app/psychology/page.tsx" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Holistic Support */}
      <section className="py-16 px-8 bg-gray-50" data-unique-id="4748a05e-38d6-4444-b069-e20dec3cd646" data-file-name="app/psychology/page.tsx">
        <div className="max-w-6xl mx-auto" data-unique-id="d7da7fd0-a6be-43bf-9cce-bec5a5991f54" data-file-name="app/psychology/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="0e0dcbde-c3fd-49f4-b5b0-ff1a926ada12" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="b4cc4be3-d998-43f1-9389-16f8f4d66932" data-file-name="app/psychology/page.tsx">
            Our Holistic Support May Include:
          </span></h2>
          
          <div className="space-y-6" data-unique-id="88b00199-f534-49d7-9299-42043f5f3d7d" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">
            {holisticSupportSteps.map((step, index) => <div key={index} className="flex items-start gap-6" data-unique-id="d66d902f-bc47-4587-91e8-a58324970007" data-file-name="app/psychology/page.tsx">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
              backgroundColor: 'var(--color-primary)'
            }} data-unique-id="c59e6f59-2839-4a49-9a10-0862e7844a4a" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">
                  {index + 1}
                </div>
                <span className="text-lg text-gray-700 leading-relaxed" data-unique-id="7d6b7d82-13a6-451d-9b9a-4a40ed877952" data-file-name="app/psychology/page.tsx" data-dynamic-text="true">{step}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Hear From Our Clients */}
      <section className="py-16 px-8" data-unique-id="914bb545-b8c6-465f-b735-67568e5f36a9" data-file-name="app/psychology/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="ab21e523-21de-40ea-8d7c-77a833bfaa48" data-file-name="app/psychology/page.tsx">
          <h2 className="text-4xl font-bold text-center mb-16" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="bb8af562-4a56-4209-888e-9685f887b69f" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="65ea00cd-08ca-418a-8c04-3d4360ed8e19" data-file-name="app/psychology/page.tsx">
            Hear From Our Clients
          </span></h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Because Mental Wellness Deserves Space */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-50 to-purple-50" data-unique-id="a143c6ef-c18d-4704-bf43-a3117586875f" data-file-name="app/psychology/page.tsx">
        <div className="max-w-4xl mx-auto text-center" data-unique-id="c9934593-c8f0-4c71-969a-74dee2a3092f" data-file-name="app/psychology/page.tsx">
          <h2 className="text-4xl font-bold mb-8" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="c0f1b97f-2347-4727-892d-2df6b4874398" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="926f61bc-1270-4510-840c-df332646e796" data-file-name="app/psychology/page.tsx">
            Because Mental Wellness Deserves Space, Not Shame
          </span></h2>
          <p className="text-2xl font-semibold text-gray-700 mb-4" data-unique-id="bcce5621-f593-41c9-83eb-26e46fd38eae" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="9c0d3e90-e3e2-4346-af5c-c1c7f0e1af3a" data-file-name="app/psychology/page.tsx">
            Healing isn't just about your body.
          </span></p>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed" data-unique-id="9d3ec641-41b3-41a8-86cd-e615a0f1d2a8" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="fddf038b-2e25-4104-99d1-9060a80ed43f" data-file-name="app/psychology/page.tsx">
            It's about how you think, feel, and connect with yourself and others.
          </span></p>
          <p className="text-xl text-gray-700 mb-12 font-medium" data-unique-id="a334b263-a2ed-4088-a83d-b1238336f259" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="930ba2ea-1ab2-4744-a4d1-0659a0dba965" data-file-name="app/psychology/page.tsx">
            At ReLiv Healthy, you're not judged. You're supported—every step of the way.
          </span></p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" data-unique-id="271c94a2-c80f-4b1f-bd0b-19ddc1e17c4d" data-file-name="app/psychology/page.tsx">
            <div className="bg-white rounded-2xl p-8 shadow-md" data-unique-id="98afa084-f311-4e2c-b4fc-d2fb93b4f545" data-file-name="app/psychology/page.tsx">
              <h3 className="text-xl font-semibold mb-4" style={{
              color: 'var(--color-primary)'
            }} data-unique-id="b55832dc-8ee1-4439-9add-6c8dd4e6ebea" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="ff371f55-bd8f-4b11-a92b-ed515068b071" data-file-name="app/psychology/page.tsx">
                Walk into our calm, confidential studio in Banjara Hills
              </span></h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md" data-unique-id="217bc2e4-3b4d-4909-a94c-317b0548224b" data-file-name="app/psychology/page.tsx">
              <h3 className="text-xl font-semibold mb-4" style={{
              color: 'var(--color-primary)'
            }} data-unique-id="7017818d-f82a-4590-a794-f7c833472e9d" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="1aecd19a-6e95-4b99-ba74-25fc42f2b5e7" data-file-name="app/psychology/page.tsx">
                Or access virtual counseling from the safety of your home
              </span></h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="book" className="py-16 px-8" data-unique-id="bd1a2ef8-ce12-47c2-b645-372f3a12f710" data-file-name="app/psychology/page.tsx">
        <div className="max-w-4xl mx-auto" data-unique-id="48a045ce-50b5-4178-bf64-924022ebd319" data-file-name="app/psychology/page.tsx">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center" data-unique-id="d24cc07a-12e2-4e77-b2c7-c6d80903c9a0" data-file-name="app/psychology/page.tsx">
            <h2 className="text-4xl font-bold mb-12" style={{
            color: 'var(--color-primary)'
          }} data-unique-id="a0ab454e-3b91-413d-a0a4-a9b1b1b9a8c5" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="ed2b8337-1cd6-448b-aa7a-8982d3818bc0" data-file-name="app/psychology/page.tsx">
              Begin Your Journey to Mental & Emotional Balance
            </span></h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-unique-id="b5e9f583-8874-4cfd-9dc1-5695b590ec10" data-file-name="app/psychology/page.tsx">
              <a href="https://wa.me/919000767060?text=Hi, I would like to book a mental wellness consultation" className="btn-cta" data-unique-id="4a590ead-53af-485f-bdd3-fd4741ed84e2" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="a5573af5-1925-43ff-8d14-7b4b2a097965" data-file-name="app/psychology/page.tsx">
                Book a Mental Wellness Consultation
              </span></a>
              <a href="https://wa.me/919000767060?text=Hi, I would like to download the stress and behavior reset toolkit" className="btn-ghost" data-unique-id="dc690044-d2e6-4560-9aeb-c66dd9d2a3c0" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="4f0f1edb-6e66-4a14-b712-fff07a22dbba" data-file-name="app/psychology/page.tsx">
                Download Our Stress & Behavior Reset Toolkit
              </span></a>
              <a href="tel:9000767060" className="btn-ghost" data-unique-id="dccfe664-ea38-414b-8b7a-dfb3d09b8f36" data-file-name="app/psychology/page.tsx"><span className="editable-text" data-unique-id="04301efc-1b79-4b1b-b015-9d15cef3df4a" data-file-name="app/psychology/page.tsx">
                Ask About CBT for Adults or Children
              </span></a>
            </div>
          </div>
        </div>
      </section>

      <MobileStickyFooter />
      <Footer />
    </div>;
}
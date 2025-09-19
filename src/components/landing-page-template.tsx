"use client";

import { HeroNoNav } from "./hero-no-nav";
import { Section } from "./section";
import { RichText } from "./rich-text";
import { CTAButton } from "./cta-button";
import { FooterMinimal } from "./footer-minimal";
import { useState } from "react";
interface LandingPageData {
  logoText: string;
  hero: {
    eyebrowText: string;
    title: string;
    subtitle: string;
    ctaText: string;
  };
  problem: {
    title: string;
    content: string;
  };
  whatWeTreat: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  whyItHappens: {
    title: string;
    content: string;
  };
  ourApproach: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    reviews: Array<{
      name: string;
      text: string;
      rating: number;
      image: string;
    }>;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
}
interface LandingPageTemplateProps {
  data: LandingPageData;
}
export function LandingPageTemplate({
  data
}: LandingPageTemplateProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  return <div className="min-h-screen bg-white" data-unique-id="10e75b59-2e87-4840-b396-a1d122b175bd" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
      {/* Hero Section */}
      <HeroNoNav logoText={data.logoText} eyebrowText={data.hero.eyebrowText} title={data.hero.title} subtitle={data.hero.subtitle} ctaText={data.hero.ctaText} />

      {/* Problem Section */}
      <Section id="problem" background="muted">
        <div className="text-center animate-stagger-in" data-unique-id="6bebe1df-1afb-48e5-b5dd-69d6a6bd91f2" data-file-name="components/landing-page-template.tsx">
          <h2 className="text-4xl font-bold text-foreground mb-8" data-unique-id="05baaf92-a215-49b5-bcfc-0ff787a011ab" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.problem.title}
          </h2>
          <RichText className="text-center max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-muted-foreground" data-unique-id="815ae8a8-4cdc-454b-8375-af6e47105819" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
              {data.problem.content}
            </p>
          </RichText>
        </div>
      </Section>

      {/* What We Treat Section */}
      <Section id="what-we-treat">
        <div className="animate-stagger-in" data-unique-id="15d67d97-bec4-43fd-aa98-b56c1a4bd0cb" data-file-name="components/landing-page-template.tsx">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16" data-unique-id="a9fdd7b4-cd89-429f-ab57-3adbcf49b016" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.whatWeTreat.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-unique-id="96bd4248-e8ef-4967-b8b4-daf1fbc12282" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.whatWeTreat.items.map((item, index) => <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden glass-effect" style={{
            animationDelay: `${index * 0.1}s`
          }} data-unique-id="2e488ad7-b800-4036-9424-59e5bb0904e5" data-file-name="components/landing-page-template.tsx">
                <div className="aspect-video overflow-hidden" data-unique-id="01bd6e64-7f2e-4b02-bd14-1b882cf99e82" data-file-name="components/landing-page-template.tsx">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-unique-id="0a7e8f49-bb26-4727-a07d-c55e19f140a2" data-file-name="components/landing-page-template.tsx" />
                </div>
                <div className="p-6" data-unique-id="00783e1c-9615-443e-8835-82c5495d9183" data-file-name="components/landing-page-template.tsx">
                  <h3 className="text-xl font-semibold text-foreground mb-3" data-unique-id="8c1c0938-7f12-4503-aa41-39049b7e0a11" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-unique-id="29e599cc-0628-446f-8590-53c87194de2b" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
                    {item.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </Section>

      {/* Why It Happens Section */}
      <Section id="why-it-happens" background="muted">
        <div className="text-center animate-stagger-in" data-unique-id="b3b4c9eb-4238-45b2-9719-9f97363c1f4e" data-file-name="components/landing-page-template.tsx">
          <h2 className="text-4xl font-bold text-foreground mb-8" data-unique-id="41544f15-a54d-4ba6-9c61-5d8e3c987cd4" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.whyItHappens.title}
          </h2>
          <RichText className="text-center max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-muted-foreground" data-unique-id="f1dacef8-666d-4981-b811-47396fb22089" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
              {data.whyItHappens.content}
            </p>
          </RichText>
        </div>
      </Section>

      {/* Our Approach Section */}
      <Section id="our-approach">
        <div className="animate-stagger-in" data-unique-id="2c7f2ae7-969a-4e03-8e05-eda65ae13b93" data-file-name="components/landing-page-template.tsx">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16" data-unique-id="0fe1c139-76d3-445c-9982-d91c72deb24d" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.ourApproach.title}
          </h2>
          <div className="space-y-12" data-unique-id="fb4a11cc-ee12-46bd-b019-f0449a830a8b" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.ourApproach.steps.map((step, index) => <div key={index} className="flex items-start gap-8 group" style={{
            animationDelay: `${index * 0.2}s`
          }} data-unique-id="ce06256d-cde1-4ffb-8c06-19b7a9771444" data-file-name="components/landing-page-template.tsx">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300" data-unique-id="2ed8ec7b-3687-4f55-a4f8-272f82294950" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
                  {step.number}
                </div>
                <div className="flex-1" data-unique-id="d111de19-4294-4ddd-bff1-4bae3d67337d" data-file-name="components/landing-page-template.tsx">
                  <h3 className="text-2xl font-semibold text-foreground mb-4" data-unique-id="bdcddf76-8f42-4275-834d-9590b5fc5892" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed" data-unique-id="59fe236d-dbf6-4178-b855-cc0372ca4440" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" background="muted">
        <div className="animate-stagger-in" data-unique-id="79964016-97d7-4ff5-abc4-842b996cb3a0" data-file-name="components/landing-page-template.tsx">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16" data-unique-id="ed069769-c2d7-4cfc-a03b-4c106fa5ac63" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-unique-id="5b97d011-f002-4977-aae6-a67dbfd81dce" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.testimonials.reviews.map((review, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 glass-effect" style={{
            animationDelay: `${index * 0.1}s`
          }} data-unique-id="0f7acfa4-412f-4bdc-b74e-cb1dc2f20316" data-file-name="components/landing-page-template.tsx">
                <div className="flex items-center mb-4" data-unique-id="fe79a081-bbf0-453c-97a0-c0628651bc46" data-file-name="components/landing-page-template.tsx">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" data-unique-id="286d8f1e-8d38-4379-b3f5-634d5ef57d4d" data-file-name="components/landing-page-template.tsx" />
                  <div data-unique-id="4e1f250b-b56b-4b38-9858-ed842970357e" data-file-name="components/landing-page-template.tsx">
                    <div className="font-semibold text-foreground" data-unique-id="1e182a04-a84a-4570-8c4d-25955a69cb07" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">{review.name}</div>
                    <div className="flex text-yellow-400" data-unique-id="344c71df-2ff1-44fb-97a1-d7ff621f37df" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
                      {[...Array(review.rating)].map((_, i) => <span key={i} data-unique-id="1827efe8-a4c8-4f30-a708-8c5c0529c658" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="287786ad-4611-4c0d-b3fe-60e5f64352ff" data-file-name="components/landing-page-template.tsx">★</span></span>)}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic" data-unique-id="80cf99bc-ccf2-4bd8-a1bd-ca93d086cdea" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="d20579fa-629f-4d95-b3ce-12db3e5f3e6e" data-file-name="components/landing-page-template.tsx">
                  "</span>{review.text}<span className="editable-text" data-unique-id="7a9ddaa3-4069-46c9-aba2-333cf010398f" data-file-name="components/landing-page-template.tsx">"
                </span></p>
              </div>)}
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section id="cta-banner">
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-16 text-white animate-stagger-in" data-unique-id="9b436623-1ccb-4f8c-a0d1-5625b042f330" data-file-name="components/landing-page-template.tsx">
          <h2 className="text-4xl font-bold mb-6" data-unique-id="1d43a853-43bf-4036-a0bd-f5cd4f41c772" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.ctaBanner.title}
          </h2>
          <p className="text-xl mb-8 opacity-90" data-unique-id="3128f743-a32d-405f-b431-a9dfc248476f" data-file-name="components/landing-page-template.tsx" data-dynamic-text="true">
            {data.ctaBanner.subtitle}
          </p>
          <CTAButton href="#contact" variant="primary" className="bg-white text-primary hover:bg-gray-50">
            {data.ctaBanner.ctaText}
          </CTAButton>
        </div>
      </Section>

      {/* Lead Form */}
      <Section id="contact" background="muted">
        <div className="max-w-2xl mx-auto animate-stagger-in" data-unique-id="4880053c-b14b-4a75-8863-a97e60cdf689" data-file-name="components/landing-page-template.tsx">
          <div className="text-center mb-12" data-unique-id="5d501792-9609-4e96-8dd4-7a650fc8aefc" data-file-name="components/landing-page-template.tsx">
            <h2 className="text-4xl font-bold text-foreground mb-4" data-unique-id="16c7573b-5e3a-422e-86ca-63e04be95586" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="beaf060b-f702-4a53-9994-b4551aa7f5c1" data-file-name="components/landing-page-template.tsx">
              Get Started Today
            </span></h2>
            <p className="text-xl text-muted-foreground" data-unique-id="bab09198-778f-413a-9b93-ace7548cf309" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="d3c3c704-4b31-456f-b680-c5ecbc3e13cd" data-file-name="components/landing-page-template.tsx">
              Take the first step towards better health. Fill out the form below and we'll get back to you shortly.
            </span></p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg glass-effect" data-unique-id="e1625759-eeb8-48d3-97e6-0970842ef35f" data-file-name="components/landing-page-template.tsx">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" data-unique-id="ad82b103-e449-4299-ba59-6ee05071de18" data-file-name="components/landing-page-template.tsx">
              <div data-unique-id="c74ca265-948b-4d67-a7cd-d758005c3844" data-file-name="components/landing-page-template.tsx">
                <label className="block text-sm font-semibold text-foreground mb-2" data-unique-id="40855940-ee9b-4438-8a0e-57a91cb239e7" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="4824fb2c-56c1-44bd-9246-d7621be797c5" data-file-name="components/landing-page-template.tsx">
                  Full Name *
                </span></label>
                <input type="text" required value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter your full name" data-unique-id="242a7392-4f7f-46bc-b34f-950d64dbc286" data-file-name="components/landing-page-template.tsx" />
              </div>
              <div data-unique-id="bde0af30-7be8-4939-ad2f-822cb0f6624e" data-file-name="components/landing-page-template.tsx">
                <label className="block text-sm font-semibold text-foreground mb-2" data-unique-id="5495d8b1-aff5-44f0-aeb2-09d61f43d406" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="2ba27522-c0dc-4ab2-b936-8831cf34172c" data-file-name="components/landing-page-template.tsx">
                  Email Address *
                </span></label>
                <input type="email" required value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter your email" data-unique-id="8981b0cb-6750-45b3-891b-f38d8f72d4e1" data-file-name="components/landing-page-template.tsx" />
              </div>
            </div>
            
            <div className="mb-6" data-unique-id="f7fa99e7-e43d-4160-a33b-b5361f61e69d" data-file-name="components/landing-page-template.tsx">
              <label className="block text-sm font-semibold text-foreground mb-2" data-unique-id="3d446576-6f07-4b0b-acb0-e71ffc81f843" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="9446c0dd-8b51-4ab6-b104-917daf70e95a" data-file-name="components/landing-page-template.tsx">
                Phone Number
              </span></label>
              <input type="tel" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter your phone number" data-unique-id="26a7dcbc-b1ec-4cbf-9a55-a3a27e472fec" data-file-name="components/landing-page-template.tsx" />
            </div>
            
            <div className="mb-8" data-unique-id="d16b391e-7d85-4355-808e-ddce4ddf89a3" data-file-name="components/landing-page-template.tsx">
              <label className="block text-sm font-semibold text-foreground mb-2" data-unique-id="bd8c0e3c-5304-4c3b-b11d-8ae6891f3812" data-file-name="components/landing-page-template.tsx"><span className="editable-text" data-unique-id="b0929d0f-c70c-4c45-993f-adae064a1ed2" data-file-name="components/landing-page-template.tsx">
                How can we help you?
              </span></label>
              <textarea value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} rows={4} className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your concerns and how we can help..." data-unique-id="8282a369-f640-491b-9286-faabb5316ea3" data-file-name="components/landing-page-template.tsx" />
            </div>
            
            <CTAButton variant="primary" size="lg" className="w-full"><span className="editable-text" data-unique-id="5ba36bd7-768b-4c51-aee0-0d52806decc3" data-file-name="components/landing-page-template.tsx">
              Submit Request
            </span></CTAButton>
          </form>
        </div>
      </Section>

      <FooterMinimal />
    </div>;
}
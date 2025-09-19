"use client";

import { CTAButton } from "./cta-button";
interface HeroNoNavProps {
  logoText: string;
  eyebrowText: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
}
export function HeroNoNav({
  logoText,
  eyebrowText,
  title,
  subtitle,
  ctaText,
  ctaHref = "#contact"
}: HeroNoNavProps) {
  return <section className="relative min-h-screen bg-white overflow-hidden" data-unique-id="2098a0d3-b357-4cc7-bcb9-36b0919ee6fe" data-file-name="components/hero-no-nav.tsx" data-dynamic-text="true">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" data-unique-id="bcd9cd4a-a7ba-4ba9-b0c8-73239c02a1ea" data-file-name="components/hero-no-nav.tsx"></div>
      
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10" data-unique-id="e4cd8017-2dc1-435b-966e-ce0d7b5ac474" data-file-name="components/hero-no-nav.tsx">
        <a href="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300" data-unique-id="fc4c567c-7b46-4e0a-955e-8408781a9bc2" data-file-name="components/hero-no-nav.tsx" data-dynamic-text="true">
          {logoText}
        </a>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8" data-unique-id="b4a21d05-e28b-4d72-aea6-9ecdb8edb58b" data-file-name="components/hero-no-nav.tsx">
        <div className="max-w-4xl text-center animate-fade-in-up" data-unique-id="c9850b17-49e7-4e7c-9873-f369c5b0df42" data-file-name="components/hero-no-nav.tsx">
          <div className="mb-6" data-unique-id="2ce51e32-5522-4a3a-aad3-a6fc00281540" data-file-name="components/hero-no-nav.tsx">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full glass-effect" data-unique-id="15f9e8fd-237e-4560-b561-ebe8dc1b0c45" data-file-name="components/hero-no-nav.tsx" data-dynamic-text="true">
              {eyebrowText}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight" data-unique-id="b0ff7f27-9537-4817-91de-6f6e66126b11" data-file-name="components/hero-no-nav.tsx" data-dynamic-text="true">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-unique-id="ed91c99e-8b2f-4637-aa8e-ee974fa13314" data-file-name="components/hero-no-nav.tsx" data-dynamic-text="true">
            {subtitle}
          </p>
          
          <CTAButton href={ctaHref}>
            {ctaText}
          </CTAButton>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" data-unique-id="1aa19bf1-8727-4d2f-b494-31bbc157402e" data-file-name="components/hero-no-nav.tsx"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{
      animationDelay: '1s'
    }} data-unique-id="9a2b6406-bf4f-46ad-81e3-219a995ea64f" data-file-name="components/hero-no-nav.tsx"></div>
    </section>;
}
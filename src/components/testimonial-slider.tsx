"use client";

import { useState, useEffect } from "react";
interface Testimonial {
  quote: string;
  name: string;
}
interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}
export function TestimonialSlider({
  testimonials,
  autoplay = true,
  duration = 5000
}: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, duration);
    return () => clearInterval(interval);
  }, [testimonials.length, autoplay, duration, isPaused]);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} data-unique-id="87aa3519-7abe-4690-a843-716faf8f18e2" data-file-name="components/testimonial-slider.tsx">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 min-h-[200px] flex items-center justify-center" data-unique-id="2b1d46d4-15a6-4d70-81e0-7189c3c671f3" data-file-name="components/testimonial-slider.tsx">
        <div className="text-center max-w-2xl" data-unique-id="c207ebf5-6300-4189-8966-e74e62758810" data-file-name="components/testimonial-slider.tsx">
          <blockquote className="text-xl text-gray-700 mb-4 leading-relaxed" data-unique-id="a6c53a2c-9742-4ee2-855f-366205be8862" data-file-name="components/testimonial-slider.tsx" data-dynamic-text="true"><span className="editable-text" data-unique-id="206adeff-8c86-4781-b294-5d58bfcccc8d" data-file-name="components/testimonial-slider.tsx">
            "</span>{testimonials[currentIndex]?.quote}<span className="editable-text" data-unique-id="fa509e83-f32e-43bb-ba3c-39ac67cfd72b" data-file-name="components/testimonial-slider.tsx">"
          </span></blockquote>
          <cite className="text-lg font-semibold" style={{
          color: 'var(--color-primary)'
        }} data-unique-id="1afbd2c2-b1e4-4644-aad0-2e983d83538f" data-file-name="components/testimonial-slider.tsx" data-dynamic-text="true">
            {testimonials[currentIndex]?.name}
          </cite>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2" data-unique-id="936a1ee3-0e34-4f7a-9691-704c4455018e" data-file-name="components/testimonial-slider.tsx" data-dynamic-text="true">
        {testimonials.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to testimonial ${index + 1}`} data-unique-id="9a4567d6-b7b1-4a4b-b5e1-800b5f36e4c6" data-file-name="components/testimonial-slider.tsx" />)}
      </div>
    </div>;
}
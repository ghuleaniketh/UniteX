import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    quote: "Unitex helped me find the perfect study group for my computer science major. We've been collaborating for a year now, and I've improved my grades significantly!",
    name: 'Sarah Johnson',
    title: 'Computer Science Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  }, {
    quote: 'As an international student, I was struggling to find my place. Unitex connected me with other students from my country and helped me build a support network.',
    name: 'Miguel Rodriguez',
    title: 'Business Administration Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  }, {
    quote: "The collaborative projects on Unitex helped me build a portfolio that landed me my dream internship. I couldn't have done it without this platform!",
    name: 'Emily Chen',
    title: 'Graphic Design Student',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);
  return <section
  id="testimonials"
  className="py-20 text-white"
  style={{
    background: 'linear-gradient(to bottom, rgba(21, 20, 26, 1) 0%, rgba(8, 2, 19, 1) 25%, rgba(16, 19, 36, 1) 50%, rgba(13, 14, 37, 1) 75%, rgba(24, 29, 56, 1) 100%)'
  }}
>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Student Success Stories
          </h2>
          <p className="text-white-600 max-w-4xl mx-auto">
            Hear from students who have transformed their academic journey with
            Unitex.
          </p>
        </div>
        <div className="max-w-4xl mx-auto relative">
      <div className="relative h-[400px] bg-[#1c1c1f] rounded-2xl p-8 md:p-12 shadow-lg overflow-hidden">
  {/* Background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className={`transition-all duration-500 h-full flex flex-col justify-between ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'}`}>
              <div>
                <div className="text-4xl text-indigo-400 mb-6">"</div>
                <p className="text-lg md:text-xl text-white-700 mb-8">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
              <div className="flex items-center">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation buttons */}
          <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-colors duration-300">
            <ChevronLeft className="w-6 h-6 text-indigo-600" />
          </button>
          <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-colors duration-300">
            <ChevronRight className="w-6 h-6 text-indigo-600" />
          </button>
          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-indigo-600 w-6' : 'bg-indigo-200'}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
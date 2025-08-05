import React from 'react';
import { ArrowRight } from 'lucide-react';
export const CTA = () => {
  return <section
  className="py-20 text-white relative overflow-hidden"
  style={{
    background: 'linear-gradient(to bottom, rgba(21, 20, 26, 1) 0%, rgba(8, 2, 19, 1) 25%, rgba(16, 19, 36, 1) 50%, rgba(13, 14, 37, 1) 75%, rgba(24, 29, 56, 1) 100%)'
  }}
>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey to Success?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are already connecting,
            collaborating, and achieving their dreams with Unitex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 font-medium py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Get Started Now
              <ArrowRight className="ml-2 animate-bounce-x" />
            </button>
            <button className="bg-transparent text-white border-2 border-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
          {/* <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=50&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <div className="w-10 h-10 rounded-full bg-indigo-800 border-2 border-white flex items-center justify-center text-xs font-medium">
                  +50K
                </div>
              </div>
              <p className="ml-4 text-indigo-100">Joined last month</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="text-yellow-300 mr-2">★★★★★</div>
                <p className="text-indigo-100">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>;
};
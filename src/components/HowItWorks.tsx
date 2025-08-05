import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export const HowItWorks = () => {
  const steps = [{
    number: '01',
    title: 'Create Your Profile',
    description: 'Set up your academic profile with your interests, goals, and aspirations to find the perfect matches.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }, {
    number: '02',
    title: 'Connect With Peers',
    description: 'Find and connect with like-minded students who share your academic interests and career goals.',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }, {
    number: '03',
    title: 'Collaborate on Projects',
    description: 'Work together on meaningful projects that enhance your skills and build your portfolio.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }, {
    number: '04',
    title: 'Achieve Your Goals',
    description: 'Track your progress, celebrate milestones, and reach your academic and career objectives.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
  }];
  // Create a ref for each step to check if it's in view
  const refs = steps.map(() => useInView({
    triggerOnce: false,
    threshold: 0.2
  }));
  return <section
  id="how-it-works"
  className="py-20 text-white"
  style={{
    background: 'linear-gradient(to bottom, rgba(21, 20, 26, 1) 0%, rgba(8, 2, 19, 1) 25%, rgba(16, 19, 36, 1) 50%, rgba(13, 14, 37, 1) 75%, rgba(24, 29, 56, 1) 100%)'
  }}
>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Unitex Works
          </h2>
          <p className="text-rgba(178, 176, 187, 1)-600 max-w-2xl mx-auto">
            A simple four-step process to help you connect, collaborate, and
            achieve your academic goals.
          </p>
        </div>
        <div className="space-y-24">
          {steps.map((step, index) => {
          const [ref, inView] = refs[index];
          return <div key={index} ref={ref} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 absolute inset-0 rounded-xl transform rotate-3 scale-105 opacity-20"></div>
                    <img src={step.image} alt={step.title} className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover" style={{
                  height: '350px'
                }} />
                    <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-rgba(178, 176, 187, 1)-600 text-lg mb-6">
                    {step.description}
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
import React, { useEffect, useState } from 'react';
export const Community = () => {
  const [counter, setCounter] = useState(0);
  const stats = [{
    value: 50000,
    label: 'Students'
  }, {
    value: 120,
    label: 'Countries'
  }, {
    value: 2500,
    label: 'Projects'
  }, {
    value: 95,
    label: 'Success Rate'
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev < 100 ? prev + 1 : 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  return <section
  id="community"
  className="py-20 text-white relative overflow-hidden"
  style={{
    background: 'linear-gradient(to bottom, rgba(21, 20, 26, 1) 0%, rgba(8, 2, 19, 1) 25%, rgba(16, 19, 36, 1) 50%, rgba(13, 14, 37, 1) 75%, rgba(24, 29, 56, 1) 100%)'
  }}
>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Global Community
          </h2>
          <p className="text-rgba(178, 176, 187, 1)-200 max-w-2xl mx-auto">
            Connect with students from around the world who are passionate about
            learning, growing, and achieving their dreams together.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
          const displayValue = Math.floor(stat.value / 100 * counter);
          const isPercentage = stat.label === 'Success Rate';
          return <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-300 to-purple-200 bg-clip-text text-transparent">
                  {displayValue.toLocaleString()}
                  {isPercentage ? '%' : ''}
                </div>
                <p className="text-indigo-200">{stat.label}</p>
              </div>;
        })}
        </div>
        <div className="bg-rgba(18, 25, 66, 0.62)-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Connect with Like-minded Students?
              </h3>
              <p className="text-rgba(178, 176, 187, 1)-200 mb-6">
                Join thousands of students who are already collaborating,
                learning, and growing together on Unitex.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-indigo-700 font-medium py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Join Community
                </button>
                <button className="bg-transparent text-white border-2 border-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-indigo-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 relative">
              <div className="relative z-10 grid grid-cols-2 gap-2">
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Student 1" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Student 2" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
                <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Student 3" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Student 4" className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
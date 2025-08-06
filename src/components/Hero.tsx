import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block py-1 px-4 rounded-full bg-indigo-900 text-indigo-300 font-medium text-sm mb-6">Shaping Student Futures</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Connect, Collaborate, Achieve Your Dreams</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Unitex creates pathways for students to achieve their goals by
              connecting like-minded individuals and fostering meaningful
              collaboration.
            </p>
          </div>
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Get Started
              <ChevronRight size={20} className="ml-2 animate-bounce-x" />
            </button>
            <button className="bg-transparent text-indigo-300 border-2 border-indigo-500 font-medium py-3 px-8 rounded-full hover:shadow-lg hover:bg-indigo-900 transition-all duration-300">
              Learn More
            </button>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gray-900 rounded-2xl shadow-xl p-2 relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-80"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

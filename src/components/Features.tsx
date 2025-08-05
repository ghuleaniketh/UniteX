import React from 'react'
import { Users, Target, Globe, Lightbulb } from 'lucide-react'
export const Features = () => {
  const features = [
    {
      icon: <Target className="w-10 h-10 text-indigo-400" />,
      title: 'Goal Achievement',
      description:
        'Set clear objectives and track your progress with our guided path system designed for student success.',
    },
    {
      icon: <Users className="w-10 h-10 text-indigo-400" />,
      title: 'Like-minded Connections',
      description:
        'Connect with students who share your interests, ambitions, and academic pursuits.',
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-400" />,
      title: 'Global Community',
      description:
        'Join a worldwide network of students collaborating across borders and disciplines.',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-indigo-400" />,
      title: 'Collaborative Projects',
      description:
        'Work together on meaningful projects that enhance your skills and build your portfolio.',
    },
  ]
  return (
    <section id="features" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Empowering Student Journeys
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how Unitex helps students connect, collaborate, and achieve
            their dreams through our innovative platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 group"
            >
              <div className="mb-4 p-3 bg-indigo-900 bg-opacity-50 rounded-lg inline-block group-hover:bg-indigo-800 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

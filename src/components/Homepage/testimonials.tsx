// src/components/Feedback.tsx
import React from 'react'
import { Carousel } from 'antd'
import './feedback.css';

// Replace these with your actual testimonial images
import user1Img from '../../assets/Homepage/Group 1361498813.png'
import user2Img from '../../assets/Homepage/Group 1361498813.png'
import user3Img from '../../assets/Homepage/Group 1361498813.png'

interface Testimonial {
  name: string
  feedback: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jane Smith',
    feedback:
      'This product changed the way our team works—absolutely indispensable!',
    image: user1Img,
  },
  {
    name: 'Michael Lee',
    feedback:
      'Fantastic support and a seamless experience from day one.',
    image: user2Img,
  },
  {
    name: 'Sara Johnson',
    feedback:
      'Highly recommend to anyone looking for a reliable solution.',
    image: user3Img,
  },
]

export const Feedback: React.FC = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold font-montserrat text-gray-800 mb-8">
        What Our Clients Say
      </h2>
    </div>
    <div className="max-w-4xl mx-auto px-6">
      <Carousel dots arrows autoplay>
        {testimonials.map((t, idx) => (
          <div key={idx} className="px-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-start">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 rounded-full object-cover mr-6 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold font-montserrat text-gray-800">
                  {t.name}
                </h3>
                <p className="mt-2 text-gray-600 italic">“{t.feedback}”</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
)

export default Feedback
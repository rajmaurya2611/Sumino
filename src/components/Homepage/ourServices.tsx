// src/components/OurServices.tsx
import React from 'react'
import mobileIcon from '../../assets/Homepage/coding 1.png'
import webIcon    from '../../assets/Homepage/apps 1.png'
import seoIcon    from '../../assets/Homepage/startup 1.png'
import arvrIcon   from '../../assets/Homepage/immersive 1.png'

interface Service {
  title: string
  description: string
  icon: string
  iconBg: string
  tags: string[]
}

const services: Service[] = [
  {
    title: 'Mobile Applications',
    description: 'The simplest but robust technology to accompany you.',
    icon: mobileIcon,
    iconBg: 'bg-purple-50',
    tags: ['Design', 'UI/UX', 'Java','Kotlin'],
  },
  {
    title: 'Web Application',
    description: 'Platform-independent business solutions for maximum scalability.',
    icon: webIcon,
    iconBg: 'bg-red-50',
    tags: [],
  },
  {
    title: 'SEO',
    description: 'Get the world to find you on any device.',
    icon: seoIcon,
    iconBg: 'bg-blue-50',
    tags: [],
  },
  {
    title: 'AR/VR Solutions',
    description: 'Advanced autonomous technologies to make life simple.',
    icon: arvrIcon,
    iconBg: 'bg-indigo-50',
    tags: [],
  },
]

const OurServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-medium font-montserrat">
          Our <span className="font-bold text-[#183B56]">Services</span>
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mt-12 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="flex p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Icon column (1/4 width) */}
            <div className="w-1/4 flex items-center justify-center">
              <div className={`w-14 h-14 flex items-center justify-center rounded-full ${svc.iconBg}`}>
                <img src={svc.icon} alt={svc.title} className="w-full" />
              </div>
            </div>

            {/* Text column (3/4 width) */}
            <div className="w-3/4 pl-4">
              <h3 className="text-xl font-semibold font-montserrat text-gray-800">
                {svc.title}
              </h3>
              <p className="mt-2 text-gray-500">{svc.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <p className='text-xs text-blue-500 px-2 py-1 rounded'>Tech Stack</p>
                {svc.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices

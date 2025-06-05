// src/components/FeatureSection.tsx
import React from 'react'
import featureimg from '../../assets/Insaver/android-smartphone-free-mockup 1.png'

const AboutSection: React.FC = () => {
  // Hard-coded features list inside this file
  const features = [
    {
      title: 'Creative Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc ante velit vitae.',
    },
    {
      title: 'Easy to Use',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc ante velit vitae.',
    },
    {
      title: 'Best User Experience',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc ante velit vitae.',
    },
  ]

  return (
    <section className="py-16 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            About Our App
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc
            ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
            amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
            tempus, ac nunc libero urna, feugiat.
          </p>
        </div>

        {/* Content: Image on left, features on right */}
        <div className="flex flex-col md:flex-row md:items-stretch items-start">
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 ">
             <img    src={featureimg} alt="App preview" className="
      object-contain 
      h-auto 
      max-h-[400px] 
      w-full 
      transform        /* enable transforms */
      hover:scale-110 /* scale up to 105% on hover */
      transition-transform 
      duration-300    /* adjust as needed for speed */
    "
 />
          </div>

          {/* Right: Feature Cards */}
          <div className="md:w-1/2 flex flex-col md:flex-1">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="
                  flex-1 
                  bg-white 
                  rounded-lg 
                  shadow-lg 
                  p-6 
                  mb-6 
                  flex 
                  flex-col 
                  justify-center
                  hover:shadow-xl 
                  transition
                "
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-600">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

// src/components/AppFeatures.tsx
import React from "react"

// Import your assets
import bgPattern from "../../assets/Insaver/Rectangle 14.png"
import phoneMockup from "../../assets/Insaver/Group 1361498814.png"

const AppFeatures: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 md:py-28 lg:py-8 lg:pb-24"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-3xl font-semibold font-montserrat">
          App Features
        </h2>
        <p className="mt-4 text-gray-300 text-sm sm:text-base font-montserrat ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit.
        </p>

        {/* Centered Phone Mockup */}
        <div className="mt-12 flex justify-center">
          <img
            src={phoneMockup}
            alt="Phone Mockup"
            className="
              w-96 sm:w-full md:h-full lg:w-full xl:w-full
              drop-shadow-2xl
              transform
              hover:scale-105
              transition-transform
              duration-300
            "
          />
        </div>
      </div>
    </section>
  )
}

export default AppFeatures

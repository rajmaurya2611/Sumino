// src/components/ThreeCardCarousel.tsx
import React, { useState, useEffect, useMemo } from 'react'
import { Carousel } from 'antd'
import img1 from '../../assets/Insaver/image 1.png'
import img2 from '../../assets/Insaver/image 3.png'
import img3 from '../../assets/Insaver/image 4.png'

interface SlideItem {
  image: string
}

const slideItems: SlideItem[] = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img1 },
  { image: img2 },
  { image: img3 },
  // …add as many items as you like…
]

/**
 * Utility: split an array into subarrays of length `size`
 */
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

const ThreeCardCarousel: React.FC = () => {
  // Track how many items to show per slide (1 on mobile, 3 on md+)
  const [itemsPerSlide, setItemsPerSlide] = useState<number>(
    window.innerWidth < 768 ? 1 : 3
  )

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Memoize the grouped slides whenever itemsPerSlide changes
  const slides = useMemo(() => chunkArray(slideItems, itemsPerSlide), [itemsPerSlide])

  return (
    <div className="bg-white font-montserrat pt-16 pb-8 px-20">
        <h2 className="text-center text-4xl font-medium font-montserrat pb-12">
          App Interface <span className="font-semibold text-[#183B56]">Look</span>
        </h2>
      <Carousel dots arrows autoplay>
        {slides.map((group, groupIdx) => (
          <div key={groupIdx} className="px-4 sm:px-8 md:px-8">
            <div
              className={`
                flex 
                ${itemsPerSlide === 1 ? 'justify-center' : 'justify-center space-x-8 '} 
              `}
            >
              {group.map((item, idx) => (
                <div
                  key={idx}
                  className={`
                    ${itemsPerSlide === 1 ? 'w-full' : 'w-1/3'} 
                    flex flex-col items-center text-center
                  `}
                >
                  <img
                    src={item.image}
                    alt={`Slide ${groupIdx * itemsPerSlide + idx + 1}`}
                    className={`
                      ${
                        itemsPerSlide === 1 
                          ? 'max-h-96 w-auto'    // larger on mobile (one-per-slide)
                          : 'mb-4  w-72' // three-per-slide size
                      }
                      object-contain
                    `}
                  />
                </div>
              ))}

              {/* Fillers if last group has fewer than itemsPerSlide */}
              {group.length < itemsPerSlide &&
                Array.from({ length: itemsPerSlide - group.length }).map((_, fillerIdx) => (
                  <div
                    key={`filler-${fillerIdx}`}
                    className={itemsPerSlide === 1 ? 'w-full' : 'w-1/3'}
                  />
                ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ThreeCardCarousel

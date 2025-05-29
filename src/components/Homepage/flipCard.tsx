// src/components/FlipCard.tsx
import React from 'react'

export interface FlipCardProps {
  /** URL or import of the front-side image */
  frontImage: string
  /** URL or import of the back-side image */
  backImage: string
  /** Tailwind width class, e.g. 'w-72' or 'w-full' */
  width?: string
  /** Tailwind height class, e.g. 'h-48' or 'h-64' */
  height?: string
}

/**
 * FlipCard
 * A card that flips on its vertical axis when hovered.
 */
export const FlipCard: React.FC<FlipCardProps> = ({
  frontImage,
  backImage,
  width  = 'w-72',
  height = 'h-48',
}) => {
  return (
    <div className={`group ${width} ${height} [perspective:1000px]`}>
      <div
        className={`
          relative w-full h-full
          duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        `}
      >
        {/* Front face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            src={frontImage}
            alt="Front"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Back face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={backImage}
            alt="Back"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

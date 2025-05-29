// src/components/OurProducts.tsx
import React, { useState, useMemo } from 'react'
import { Input, Button } from 'antd'
import Fuse from 'fuse.js'
import { FlipCard } from '../Homepage/flipCard'

// Replace these with your actual “front” and “back” images
import product1Front from '../../assets/Homepage/image-removebg-preview (1) 1.png'
import product1Back  from '../../assets/Homepage/kwiGaV_qrcode 1.png'
import product2Front from '../../assets/Homepage/image-removebg-preview (1) 1.png'
import product2Back  from '../../assets/Homepage/kwiGaV_qrcode 1.png'
import product3Front from '../../assets/Homepage/image-removebg-preview (1) 1.png'
import product3Back  from '../../assets/Homepage/kwiGaV_qrcode 1.png'
// …add as many products as you like here…

interface Product {
  title: string
  description: string
  frontImage: string
  backImage: string
  url: string
  buttonText: string
}

const products: Product[] = [
  {
    title: 'Product One',
    description: 'A concise description of Product One—what it does and why it’s great.',
    frontImage: product1Front,
    backImage:  product1Back,
    url: 'https://www.product-one.com',
    buttonText: 'Learn More',
  },
  {
    title: 'Product Two',
    description: 'A concise description of Product Two—key features and benefits.',
    frontImage: product2Front,
    backImage:  product2Back,
    url: 'https://www.product-two.com',
    buttonText: 'Explore Product Two',
  },
  {
    title: 'Product Three',
    description: 'A concise description of Product Three—how it helps your users succeed.',
    frontImage: product3Front,
    backImage:  product3Back,
    url: 'https://www.product-three.com',
    buttonText: 'Discover Now',
  },
  // …more products…
]

const fuseOptions = {
  keys: ['title'],
  threshold: 0.3,      // lower = more exact matches; raise for fuzzier
  ignoreLocation: true,
}

const OurAllProducts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  // Memoize Fuse instance so it doesn't recreate on every render
  const fuse = useMemo(() => new Fuse(products, fuseOptions), [])

  // Determine which products to show based on search
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products
    return fuse.search(searchQuery).map(result => result.item)
  }, [searchQuery, fuse])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold font-montserrat text-gray-800 mb-4">
          Our Top <span className="text-blue-500">Products</span>
        </h2>

        {/* Search bar */}
        <Input.Search
          placeholder="Search products..."
          allowClear
          enterButton
          size="large"
          onSearch={value => setSearchQuery(value)}
          onChange={e => setSearchQuery(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {filteredProducts.map((prod, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            {/* Flip card */}
            <div className="flex justify-center items-center py-6">
              <FlipCard
                frontImage={prod.frontImage}
                backImage={prod.backImage}
                width="w-40"
                height="h-40"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold font-montserrat text-gray-800">
                {prod.title}
              </h3>
              <p className="mt-2 text-gray-600 flex-1">
                {prod.description}
              </p>
              <Button
                type="primary"
                href={prod.url}
                target="_blank"
                className="mt-4 self-start"
              >
                {prod.buttonText}
              </Button>
            </div>
          </div>
        ))}

        {/* Show a “no results” message when nothing matches */}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No products found for “{searchQuery}”
          </div>
        )}
      </div>
    </section>
  )
}

export default OurAllProducts

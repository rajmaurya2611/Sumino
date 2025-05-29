// src/components/Footer.tsx
import React from 'react'
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-600 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left */}
          <div className="space-y-2">
            <p>Made with love and fueled by code and caffeine (50% sugar)</p>
            <p>@Sumino Apps</p>
            <div className="flex space-x-4 mt-2 text-2xl">
              <a href="#" aria-label="GitHub" className="hover:text-gray-800">
                <GithubOutlined />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-800">
                <InstagramOutlined />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-800">
                <LinkedinOutlined />
              </a>
            </div>
          </div>

          {/* About us */}
          <div className="space-y-2 ml-20">
            <h4 className="text-gray-800 font-semibold">About us</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Lorem
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact us */}
          <div className="space-y-2">
            <h4 className="text-gray-800 font-semibold">Contact us</h4>
            <p>
              Lorem ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>+91 98942 60426</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t pt-4 text-center text-gray-400 text-sm">
          Copyright © {currentYear} All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer

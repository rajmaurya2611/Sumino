// src/components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

const InsaverFooter: React.FC = () => {

    const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-600 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left */}
          <div className="space-y-2 text-md">
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
          <div className="space-y-2 ml-28 pl-8 text-md">
            <h4 className="text-gray-800 font-semibold">Important Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="privacypolicy" className="hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="cookiespolicy" className="hover:text-gray-800">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="downloadsandrepublish" className="hover:text-gray-800">
                  Downloads & Republish
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-gray-800">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/moreinfo" className="hover:text-gray-800">
                  More Information About Insaver(permission or SDKs)
                </Link>
              </li>
              

            </ul>
          </div>

          {/* Contact us */}
          <div className="space-y-2">
            <h4 className="text-gray-800 font-semibold text-md ">Contact us</h4>
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

export default InsaverFooter

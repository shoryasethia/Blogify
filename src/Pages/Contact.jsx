import React from 'react'
import { Container } from '../components'

function Contact() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen'>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400 text-lg">Get in touch with the developer</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Developer Info */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Developer Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://github.com/shoryasethia.png" 
                      alt="Shorya Sethia"
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                    />
                    <div>
                      <h3 className="text-white font-medium">Shorya Sethia</h3>
                      <p className="text-gray-400">Expect the Unexpected</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="text-white font-medium mb-3">Connect with me:</h4>
                    <div className="flex flex-col space-y-3">
                      {/* Email */}
                      <a 
                        href="mailto:shoryasethia4may@gmail.com"
                        className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-gray-700"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <span>shoryasethia4may@gmail.com</span>
                      </a>
                      
                      {/* LinkedIn */}
                      <a 
                        href="https://www.linkedin.com/in/shorya-sethia-680b24250/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-gray-700"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn Profile</span>
                      </a>
                      
                      {/* GitHub */}
                      <a 
                        href="https://github.com/shoryasethia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors p-3 rounded-lg hover:bg-gray-700"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub Profile</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Quick Message</h2>
                <p className="text-gray-400 mb-4">
                  Want to send a quick message? Click the button below.
                </p>
                
                <a
                  href="mailto:shoryasethia4may@gmail.com?subject=Contact from Blogify&body=Hi Shorya,%0D%0A%0D%0AI found your Blogify application and wanted to reach out..."
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Send Email
                </a>

                <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Project Information</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Blogify is full-featured blogging platform built with React, Appwrite, TinyMCE, and React Hook Form. It allows users to create, edit, and publish textual blog posts with images easily.
                  </p>
                  <a 
                    href="https://github.com/shoryasethia/Blogify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View Source Code →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact

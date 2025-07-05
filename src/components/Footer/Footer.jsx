import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Logo width="80px" />
                        </div>
                        <p className="text-gray-400 max-w-md">
                            Where stories come to life and ideas find their home.
                        </p>
                        <div className="mt-4">
                            <p className="text-sm text-gray-500">
                                &copy; 2025 Blogify. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/all-posts"
                                >
                                    All Posts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/add-post"
                                >
                                    Write Post
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    className="text-gray-400 hover:text-white transition-colors"
                                    href="https://github.com/shoryasethia/Blogify/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/contact"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-400 hover:text-white transition-colors"
                                    to="/privacy-policy"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
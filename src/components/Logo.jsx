import React from 'react'
import logoImage from '../assets/images/logo.png'

export default function Logo({width = '100px'}) {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="Blogify Logo" 
        style={{width}}
        className="object-contain"
      />
    </div>
  )
}

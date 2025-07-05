import React, { useState } from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

export default function PostCard({$id, title, featuredImage}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Generate image URL - use download URL since preview is blocked on current plan
  const imageUrl = featuredImage ? appwriteService.getFileDownload(featuredImage) : null;

  // If no featuredImage ID, show placeholder
  if (!featuredImage) {
    return (
      <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl group'>
          <div className='w-full flex justify-center mb-4'>
            <div className='w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors'>
              <span className='text-gray-400 text-lg'>📷 No Image</span>
            </div>
          </div>
          <h2 className='text-xl font-bold text-center text-white group-hover:text-blue-400 transition-colors'>{title}</h2>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl group'>
        <div className='w-full flex justify-center mb-4'>
          {imageLoading && !imageError && imageUrl && (
            <div className='w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center'>
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                <span className='text-gray-400'>Loading...</span>
              </div>
            </div>
          )}
          {(imageError || !imageUrl) ? (
            <div className='w-full h-48 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gray-600 transition-colors'>
              <span className='text-red-400 text-lg'>📷 Image Error</span>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-xl w-full h-48 bg-gray-700">
              <img 
                src={imageUrl} 
                alt={title} 
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${imageLoading ? 'hidden' : ''}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            </div>
          )}
        </div>
        <h2 className='text-xl font-bold text-center text-white group-hover:text-blue-400 transition-colors line-clamp-2'>{title}</h2>
      </div>
    </Link>
  )
}

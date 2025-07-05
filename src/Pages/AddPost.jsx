import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen'>
        <Container>
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">Create New Post</h1>
                <p className="text-gray-400">Share your thoughts with the world</p>
            </div>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost
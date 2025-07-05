import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        } else {
            // Clear posts when user logs out
            setPosts([])
        }
    }, [authStatus])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 mt-8 text-center">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-8 max-w-md">
                            <div className="mb-6 flex justify-center">
                                <img 
                                    src="/src/assets/images/logo.png" 
                                    alt="Blogify Logo" 
                                    className="w-24 h-24 object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'block';
                                    }}
                                />
                                <div className="text-6xl hidden">📝</div>
                            </div>
                            <h1 className="text-3xl font-bold text-white mb-4">
                                Welcome to Blogify
                            </h1>
                            <p className="text-gray-400 text-lg mb-6">
                                Where stories come to life and ideas find their home
                            </p>
                            <Link 
                                to="/login" 
                                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                            >
                                Login to start reading and writing posts
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Latest Posts</h1>
                    <p className="text-gray-400">Discover amazing stories and insights</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
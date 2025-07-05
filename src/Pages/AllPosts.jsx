import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)
    
    useEffect(() => {
        if (authStatus) {
            appwriteService.getPosts([]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        } else {
            // Clear posts when user logs out
            setPosts([])
        }
    }, [authStatus])
  return (
    <div className='w-full py-8 bg-gray-900 min-h-screen'>
        <Container>
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">All Posts</h1>
                <p className="text-gray-400">Browse through all published articles</p>
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

export default AllPosts
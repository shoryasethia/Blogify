import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8 bg-gray-900 min-h-screen'>
        <Container>
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">Edit Post</h1>
                <p className="text-gray-400">Update your article</p>
            </div>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
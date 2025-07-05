import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 bg-gray-900 min-h-screen">
            <Container>
                <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                    {/* Featured Image Section */}
                    <div className="relative">
                        {post.featuredImage ? (
                            <div className="w-full bg-gray-700 flex items-center justify-center p-4">
                                <img
                                    src={appwriteService.getFileDownload(post.featuredImage)}
                                    alt={post.title}
                                    className="max-w-full max-h-96 object-contain rounded-lg"
                                    onError={(e) => {
                                        e.target.parentElement.innerHTML = `
                                            <div class="w-full h-64 bg-gray-700 flex items-center justify-center">
                                                <span class="text-gray-400 text-lg">📷 Image not available</span>
                                            </div>
                                        `;
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                                <span className="text-gray-400 text-lg">📷 No Image Available</span>
                            </div>
                        )}

                        {/* Edit/Delete buttons overlay */}
                        {isAuthor && (
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-600 hover:bg-green-700" className="text-sm">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-600 hover:bg-red-700" onClick={deletePost} className="text-sm">
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                        <div className="mb-6">
                            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">{post.title}</h1>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-300">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
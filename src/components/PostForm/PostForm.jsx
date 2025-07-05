import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || (post?.title ? slugTransform(post.title) : ""),
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    
    // Debug: Check what userData looks like
    console.log('PostForm userData:', userData);
    console.log('PostForm auth state:', useSelector((state) => state.auth));

    const submit = async (data) => {
        try {
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    title: data.title,
                    content: data.content,
                    status: data.status,
                    featuredImage: file ? file.$id : post.featuredImage,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                if (!data.image[0]) {
                    alert('Please select an image for your post');
                    return;
                }
                
                if (!userData || !userData.$id) {
                    alert('Please login to create a post');
                    navigate('/login');
                    return;
                }
                
                const file = await appwriteService.uploadFile(data.image[0]);

                if (file && file.$id) {
                    const fileId = file.$id;
                    // Remove slug from data since it's not in the database schema
                    const { slug, ...postData } = data;
                    postData.featuredImage = fileId;
                    const dbPost = await appwriteService.createPost({ ...postData, userId: userData.$id });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                } else {
                    alert('Failed to upload image. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error submitting post:', error);
            alert(`Failed to save post: ${error.message || 'Please try again.'}`);
        }
    };

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
                <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug :"
                        placeholder="Slug"
                        className="mb-4"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                    />
                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                </div>
                <div className="w-1/3 px-2">
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="w-full mb-4">
                            <img
                                src={appwriteService.getFileDownload(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg border border-gray-600"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
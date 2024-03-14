'use client';

import { createArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlogPage = () => {

    const router = useRouter();

    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!id || !title || !content) {
            return;
        }

        setLoading(true);

        // await createArticle(id, title, content);

        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        await fetch(`${API_URL}/api/blog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, title, content })
        });
        

        setLoading(false);

        router.push("/");
        router.refresh();

    }

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2 className='text-2xl font-bold mb-4'>New create Blog</h2>
        <form className='bg-slate-200 p-6 rounded shadow-lg' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
                <input 
                type="text" 
                className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>title</label>
                <input 
                type="text" 
                className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>sentence</label>
                <textarea 
                onChange={(e) => setContent(e.target.value)} 
                className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'/>
            </div>
            <button type='submit' className={`py-2 px-4 border rounded-md ${loading ? "bg-orange-300 cursor-not-allowed rounded-full animate-spin w-16 h-16 border-t-4" : "bg-orange-400 hover:bg-orange-500"} `} disabled={loading}>Post</button>
        </form>
    </div>
  )
}

export default CreateBlogPage
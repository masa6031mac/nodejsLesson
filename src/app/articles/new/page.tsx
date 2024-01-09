"use client"
import { createArticles } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlogPage = () => {

    const router = useRouter()
    const [id, setId] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true)

        await createArticles(id, title, content)

        setLoading(false)
        router.push('/')
        router.refresh()

    }
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2 className='text-2xl font-bold mb-4'>Blog新規作成</h2>
        <form className='bg-slate-200 p-6 rouded shadow-lg' onSubmit={handleSubmit}>
            <div>
                <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
                <input type='text' className='shadow border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none'
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
                <input type='text' className='shadow border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none'
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label className='text-gray-700 text-sm font-bold mb-2'>本文</label>
                <textarea className='shadow border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none'
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit" className={`py-2 px-4 border rounded-md 
            ${loading ? "border-t-4 bg-orange-300 cursor-not-allowed": "bg-orange-400 hover:bg-orange-500"} `}
            disabled={loading}>投稿</button>
        </form>
    </div>
  )
}

export default CreateBlogPage
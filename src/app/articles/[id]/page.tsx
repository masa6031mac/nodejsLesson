import DeleteButton from '@/app/components/DeleteButton'
import { getDetailArticles } from '@/blogAPI'
import Image from 'next/image'
import React from 'react'

const Article = async ({params}: {params: {id: string}}) => {

    const detailArticle = await getDetailArticles(params.id)
    

  return (
    <div className="max-w-3xl mx-auto p-5">
        <Image src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`} alt="" width={1000} height={500}/>
        <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticle.title}</h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>{detailArticle.content}</p>
        </div>
        <div className='text-right mt-3'>
          <DeleteButton id={detailArticle.id} />
        </div>
    </div>
  )
}

export default Article
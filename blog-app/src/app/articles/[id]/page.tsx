import React, { useEffect } from 'react'

import Image from 'next/image'
import { getDetailArticles } from '@/blogAPI';
import DeleteButton from '@/app/components/DeleteButton';


const Article = async ({ params }: { params: {id: string } }) => {

  // const detailArticle = await getDetailArticles(params.id);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog/${params.id}`, { next: {revalidate: 10,} });
  const detailArticle = await res.json();

  return (
    <div className='max-w-3x1 mx-auto p-5'>
        <Image src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`} alt='' width={1280} height={300}/>
        <h1 className='text-4x1 text-center mb-10 mt-10'>{detailArticle.title}</h1>
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
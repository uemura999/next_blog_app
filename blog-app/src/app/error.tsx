"use client";

import React from 'react'

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className='bg-red-100 border-l-8 border-red-500 text-red-700 mt-4 rounded shadow-md mx-auto p-5'>
        <h3 className='font-bold mb-2'>An error has occurred</h3>
        <button onClick={() => reset() } className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200'>Try again</button>
    </div>
  )
}

export default Error
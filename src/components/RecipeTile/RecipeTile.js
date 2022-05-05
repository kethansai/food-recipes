import React from 'react'

const RecipeTile = ({data}) => {
  return (
      <div className='bg-white shadow-xl hover:shadow-2xl rounded-t-2xl my-3 mx-7 md:mx-7 max-h-full float-left px-4 py-3 w-11/12 md:w-1/5'>
          <img className='w-full rounded-t-2xl' src={data.recipe.images.SMALL.url} />
          <div className='h-20'>
              <p className='text-gray-500 mt-2 font-bold text-center'>{data.recipe.label}</p>
          </div>
      </div>
  )
}

export default RecipeTile
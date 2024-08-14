import React from 'react'

const Card = ({item}) => {
  return (
    <a href={`/products/${item?.id}`} className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img className="h-48 w-full object-cover object-center" src={item.images} alt="Product Image" />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{item?.title}</h2>
      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{item?.description}</p>
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{item?.price}</p>
        {/* <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">{item?.discountPercentage}</p> */}
        <p className="ml-auto text-base font-medium text-green-500">{item?.discountPercentage}</p>
      </div>
    </div>
  </a>
  )
}

export default Card

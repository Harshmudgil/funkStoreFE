import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Feature.scss'
import useFetch from '../../hooks/useFetch';

const Feature = ({ type }) => {

  const { data, loading, Error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  return (
    <div className="feature">
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero nesciunt numquam fuga neque culpa. Repellat eaque tempore rerum ullam, ducimus accusantium? Maxime fugiat asperiores, harum obcaecati impedit vel fuga! Suscipit!</p>
      </div>
      <div className="bottom">
        {Error ? "Error Occur" : 
        (loading ? "Loading" : data?.map(item => 
          (
          <Card item={item} key={item.id} />
          ))
         )}
      </div>
    </div>
  )
}

export default Feature;
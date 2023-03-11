import React from 'react'
import './Card.scss'
import {Link} from 'react-router-dom';

const Card = ({item}) => {
 console.log(item)
 console.log(item.attributes?.img?.data?.attributes?.url)
  return (
    <Link className="Links" to={`/product/${item.id}`}>
    <div className="card">
      <div className="image">
        {item?.attributes.isNew && <span>New Season</span>}
        <img
          src={
             item.attributes?.img?.data?.attributes?.url
          }
          alt=""
          className="mainImg"
        />
        <img
          src={
            item.attributes?.img2?.data?.attributes?.url
          }
          alt=""
          className="secondImg"
        />
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className="prices">
        <h3>{item.oldPrice || item?.attributes.price + item?.attributes.price}rs</h3>
        <h3>{item?.attributes.price}rs</h3>
      </div>
    </div>
  </Link>
  )
}

export default Card
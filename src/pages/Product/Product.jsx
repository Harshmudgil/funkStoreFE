import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Product.scss';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id;
    const{data,Error,loading} = useFetch(`/products/${id}?populate=*`)
    console.log(data)
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
  
    return (
      <div className="product">
            <div className="left">
              <div className="images">
                <img src={data?.attributes?.img?.data?.attributes?.url} onClick={((e)=> setSelectedImg("img"))}/>
                <img src={data?.attributes?.img2?.data?.attributes?.url} onClick={((e)=> setSelectedImg("img2"))}/>
              </div>
              
              <div className="mainImg">
                <img src={data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">{data?.attributes?.price}rs</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
              </div>
              <button onClick={()=> dispatch(addTocart({
                id : data.id,
                title : data.attributes.title,
                desc  : data.attributes.desc,
                price : data.attributes.price,
                quantity,
                img : data.attributes.img.data.attributes.url,
              }))}>
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>
                <div className="item">
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
      </div>
    );
  };

export default Product
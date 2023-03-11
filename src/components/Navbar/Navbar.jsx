import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const products = useSelector(state => state.cart.products);

  const[ open , setOpen ] = useState(false);
 
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">

            <Link className='Links' to='/products/1'>Men</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/2'>Women</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/3'>Boy</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/4'>Girl</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/5'>Accessories</Link>

          </div>
        </div>
        <div className="center">
          <div className="item">

            <Link className='Links' to='/'><span>FUnK StORE</span></Link>

          </div>
        </div>
        <div className="right">
          <div className="item">

            <Link className='Links' to='/products/:5'>HomePage</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/:6'>About</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/:7'>Contact</Link>

          </div>
          <div className="item">

            <Link className='Links' to='/products/:4'>Stores</Link>

          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
          </div>
          </div>
        </div>
      </div>
      {open && <Cart /> }
    </div>
  )
}

export default Navbar
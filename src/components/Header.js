import React from 'react'
import { Cart } from './Cart'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="wrapper">
      <Link to="/">
      <h2>My Store</h2>
      </Link>
      <Cart />
      </div>
    </header>
  )
}

export default Header
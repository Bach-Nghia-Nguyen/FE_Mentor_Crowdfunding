import React from 'react'
import './style.scss'

function Product(props) {
  const { name, pledge, remaining, description } = props
  const outOfStock = remaining === 0

  return (
    <div className={`ProductCard ${outOfStock && 'out-of-stock'}`}>
      <div className="top">
        <h2 className="name">{name}</h2>
        <div className="pledge">Pledge {pledge} or more</div>
      </div>

      <div className="body">
        <p className="description">{description}</p>
      </div>

      <div className="bottom">
        <div className="remaining">
          <span className="amount">{remaining}</span>
          <span className="left">left</span>
        </div>
        {outOfStock ? (
          <button className="out-of-stock-btn">Out of stock</button>
        ) : (
          <button className="select-btn">Select Reward</button>
        )}
      </div>
    </div>
  )
}

export default Product

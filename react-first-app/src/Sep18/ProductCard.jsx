import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div class="col-3 mb-3">
      <div class="card">
  <img src={product.image} style={{height:'200px'}} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.category}</p>
    <p>&#8377;{product.price}</p>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    </div>
  )
}

export default ProductCard

import React from 'react'
import Image1 from '/src/assets/images/1.jpg'
import Image2 from '/src/assets/images/2.jpg'
import Image3 from '/src/assets/images/3.jpg'
import Image4 from '/src/assets/images/4.jpg'
import Image5 from '/src/assets/images/5.jpg'
import Image6 from '/src/assets/images/6.jpg'
import Image7 from '/src/assets/images/7.jpg'
import ProductCard from './ProductCard'


let productlist = [
    {id:"1", name:"product1",price:2000,category:'grocery',brand:'brand1',image:Image1,stock:10},
    {id:"2", name:"product2",price:4000,category:'electronics',brand:'brand2',image:Image2,stock:100},
    {id:"3", name:"product3",price:6000,category:'accessories',brand:'brand3',image:Image4,stock:20},
    {id:"4", name:"product4",price:7000,category:'fashion',brand:'brand4',image:Image3,stock:1},
    {id:"5",name:"product5",price:9000,category:'electronics',brand:'brand1',image:Image5,stock:0},
    {id:"6", name:"product6",price:10000,category:'grocery',brand:'brand5',image:Image6,stock:10},
    {id:"7", name:"product7",price:2700,category:'grocery',brand:'brand3',image:Image7,stock:30}
]  
const Products = () => {
  return (
    <div>
      {/* <ProductCard product={productlist[0]}/> */}

    <div className='row'>
          {productlist.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
    </div>
  )
}

export default Products

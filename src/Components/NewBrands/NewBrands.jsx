import React from 'react'
import './NewBrands.css'
import new_brands from '../Assets/new_brands'
import Item from '../Item/Item'

export const NewBrands = () => {
  return (
    <div className='new-brands'>
        <h1>BRAND NEW</h1>
        <hr />
        <div className="brands">
        {new_brands.map((item,i)=>{
            return(
            <Item
            key={i} 
             id={item.id}
             name={item.name} 
             image={item.image} 
             new_price={item.new_price} 
             old_price = {item.old_price}
            />
        );
        })}
        </div>
    </div>
  )
}

export default NewBrands

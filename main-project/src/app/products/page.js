import React from 'react'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../services/productService'

const Product = async () => {
    const products = await getProducts(100)
    return (
        <div
            className='my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
        >
            {
                products.data.map((item,i)=> {
                    return (
                        <ProductCard key={i} item={item}/>
                    )
                })
            }
        </div>
    )
}

export default Product
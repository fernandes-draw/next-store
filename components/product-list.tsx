import React from 'react'
import Product from './product'
import { IProduct } from '@/actions/products'
import { Paginate } from './paginate'

export default function ProductList({ products }: { products: IProduct[] }) {
  return (
    <div className='space-y-3'>
      {products.slice(0, 6).map((product) => {
        return <Product product={product} key={product.id} />
      })}
      <div className="pb-4">
        <Paginate />
      </div>
    </div>
  )
}

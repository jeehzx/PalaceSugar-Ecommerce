import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-base-300 shadow-xl mb-4 hover:bg-pink-700">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            priority={true}
            className="object-cover h-64 w-full rounded mt-4"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-bold tracking-widest">{product.name}</h2>
        </Link>
        <p className="mb-2 font-bold">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl font-bold">$ {product.price}</span>
        </div>
      </div>
    </div>
  )
}

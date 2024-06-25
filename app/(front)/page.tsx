import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'PalaceSugar',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, MongoDB, Cloudinary, daisyUI, zustand, bycriptjs, NextAuth',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()

  return (
    <>
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:gripd-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  )
}

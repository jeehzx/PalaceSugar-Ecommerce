/* eslint-disable @next/next/no-img-element */
import ProductItem from '@/components/products/ProductItem'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import { IoShieldCheckmark } from 'react-icons/io5'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()

  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/banner-pink2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="banner"
          />
          <div>
            <h1 className="text-5xl font-bold">
              {' '}
              <a className="text-pink-700">W</a>elcome
            </h1>
            <p className="py-6">
              At Palace<a className="text-pink-700">Sugar</a>, we believe that
              every day should be filled with charm and joy. Our online store
              offers a delightful collection of cute clothes, enchanting home
              decor, and adorable stationery products that bring a smile to your
              face and warmth to your home. Explore our carefully curated
              selections designed to add a touch of whimsy to your wardrobe,
              living space, and workspace. From stylish outfits that make you
              feel fabulous to cozy home decor that creates a welcoming
              atmosphere, and charming stationery that makes every note special
              – we have something for everyone who loves all things cute and
              charming.
            </p>
            <p>
              Join our community of cute enthusiasts today! Create an account to
              enjoy a seamless shopping experience, stay updated with our latest
              arrivals, and access exclusive offers. At Palace
              <span className="text-pink-700">Sugar</span>, we’re more than just
              a store – we’re a destination for all things delightful. Start
              shopping now and let your journey into the world of cuteness
              begin!
            </p>
            <Link href="/signin">
              <button className="cursor-pointer btn btn-secondary mt-4 hover:btn-ghost">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t my-6 border-pink-300 w-80 mx-auto"></div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 hover:border border-pink-700 shadow-md rounded-lg">
            <RiSecurePaymentFill size={60} className="mb-4 text-green-500" />
            <h3 className="text-xl font-bold mb-2 text-black">
              Secure Payments
            </h3>
            <p>Your transactions are protected</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 hover:border border-pink-700 shadow-md rounded-lg">
            <IoShieldCheckmark size={60} className="mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2 text-black">Best Products</h3>
            <p>We offer the highest quality products</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 hover:border border-pink-700  shadow-md rounded-lg">
            <TbTruckDelivery size={60} className="mb-4 text-yellow-500" />
            <h3 className="text-xl font-bold mb-2 text-black">
              Safe and Fast Delivery
            </h3>
            <p>Your orders are handled with care and delivered in no time!</p>
          </div>
        </div>
      </div>
      <div className="border-t my-6 border-pink-300 w-80 mx-auto"></div>

      <div className="my-2">
        <h2 className="text-3xl py-2 text-center my-10 text-pink-700 font-bold">
          Latest Products
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {latestProducts.map((product) => (
            <ProductItem
              key={product.slug}
              product={convertDocToObj(product)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

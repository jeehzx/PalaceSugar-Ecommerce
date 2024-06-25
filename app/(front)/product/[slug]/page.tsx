import AddToCart from '@/components/products/AddToCart'
import data from '@/lib/data'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { convertDocToObj } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return (
      <>
        <div className="my-6 text-2xl font-normal">Product not found...</div>
        <div className="my-4 text-xs font-mono hover:text-purple-700">
          <Link href="/"> Back to Products </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-4 md:gap-2 my-6">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '55%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4 my-4">
            <li>
              <h1 className="text-4xl ">{product.name}</h1>
            </li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li> {product.brand} </li>
            <li>
              <div className="divider"></div>
            </li>
            <li className="my-4 text-2xl">Description:</li>
            <p>{product.description}</p>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl my-16">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>$ {product.price}</div>
              </div>
              <div className="divider"></div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product),
                      qty: 0,
                      color: '',
                      size: '',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 text-xl font-mono hover:text-purple-700">
        <Link href="/"> Back to Products </Link>
      </div>
    </>
  )
}

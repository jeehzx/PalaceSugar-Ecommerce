import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
  title: 'Order History',
}
export default function OrderHistory() {
  return (
    <>
      <h2 className="text-2xl py-2 mb-4 mt-4">Order History</h2>
      <MyOrders />
    </>
  )
}

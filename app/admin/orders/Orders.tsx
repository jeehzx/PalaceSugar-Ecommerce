'use client'
import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import useSWR from 'swr'

export default function Orders() {
  const { data: orders, error } = useSWR(`/api/admin/orders`)
  if (error) return 'An error has occurred.'
  if (!orders) return 'Loading...'

  return (
    <div>
      <h1 className="py-4 text-2xl font-bold">Orders</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-pink-700">ID</th>
              <th className="text-pink-700">USER</th>
              <th className="text-pink-700">DATE</th>
              <th className="text-pink-700">TOTAL</th>
              <th className="text-pink-700">PAID</th>
              <th className="text-pink-700">DELIVERED</th>
              <th className="text-pink-700">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Order) => (
              <tr key={order._id}>
                <td>..{order._id.substring(20, 24)}</td>
                <td>{order.user?.name || 'Deleted user'}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid && order.paidAt
                    ? `${order.paidAt.substring(0, 10)}`
                    : 'not paid'}
                </td>
                <td>
                  {order.isDelivered && order.deliveredAt
                    ? `${order.deliveredAt.substring(0, 10)}`
                    : 'not delivered'}
                </td>
                <td>
                  <Link
                    href={`/order/${order._id}`}
                    className="hover:text-pink-700"
                    passHref
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

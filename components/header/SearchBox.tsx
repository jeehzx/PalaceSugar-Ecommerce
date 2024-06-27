'use client'
import { useSearchParams } from 'next/navigation'
import { IoMdSearch } from 'react-icons/io'
import useSWR from 'swr'

export const SearchBox = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'All'

  const { data: categories, error } = useSWR('/api/products/categories')

  if (error) return error.message
  if (!categories) return 'Loading...'
  return (
    <form action="/search" method="GET" className="gap-2">
      <div className="join">
        <input
          className="join-item input input-bordered w-48"
          placeholder="Search"
          defaultValue={q}
          name="q"
        />
        <button className="join-item btn">
          <IoMdSearch size={24} />
        </button>
      </div>
    </form>
  )
}

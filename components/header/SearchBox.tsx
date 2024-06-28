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
    <form action="/search" method="GET">
      <div className="join">
        <input
          className="join-item input input-bordered w-48 max-sm:hidden"
          placeholder="Search"
          defaultValue={q}
          name="q"
        />
        <button className="md:join-item btn max-sm:btn-circle max-sm:btn-ghost">
          <IoMdSearch size={24} />
        </button>
      </div>
    </form>
  )
}

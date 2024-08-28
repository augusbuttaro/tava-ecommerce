'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

function NavSearch() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  )

  const handleSearch = useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set('search', value)
    }else{
      params.delete('search')
    }
    replace(`/products?${params.toString()}`)
  }, 300)

  useEffect(()=>{
    if(!searchParams.get('search')){
      setSearch('')
    }
  }, [searchParams.get('search')])

  return (
    <Input
      type="search"
      placeholder="Search products..."
      className="w-full rounded-md bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
      value={search}
      onChange={(e)=>{
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}

    />
  );
}

export default NavSearch;

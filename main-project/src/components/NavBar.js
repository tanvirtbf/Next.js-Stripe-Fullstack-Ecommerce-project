import Link from 'next/link'
import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

const NavBar = () => {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href={"/"} className='text-orange-500 font-bold text-3xl'>TanvirStore</Link>
      <div className='text-orange-500 px-4 py-2 font-bold hover:text-red-600 cursor-pointer'>
        <ShoppingCartIcon className='w-7 h-7 inline-block'/> Cart
        <span>{0}</span>
      </div>
    </nav>
  )
}

export default NavBar

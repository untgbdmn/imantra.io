import Link from 'next/link'
import React from 'react'

export default function NavbarFront() {
  return (
    <div className='flex flex-row items-center justify-between px-2 py-4'>
      <Link href="/" className='text-2xl font-bold text-blue-600'>iMantra.io</Link>
      <div className="flex flex-row gap-3">
        <Link href="/login" className='border-black px-5 py-1 rounded-md border-2 font-bold'>Login</Link>
        <Link href="/register" className='bg-black text-white px-5 py-1 rounded-md font-bold'>Register</Link>
      </div>
    </div>
  )
}

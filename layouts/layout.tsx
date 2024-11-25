import NavbarFront from '@/layouts/navbar-front'
import React, { ReactNode } from 'react'

export default function LayoutAuthPage({children, title}: {children: ReactNode, title: string}) {
    return (
        <div className='px-3 py-2 min-h-screen h-full w-full'>
            <NavbarFront />
            <div className="flex w-full items-center justify-center">
                <div className="w-1/2 rounded-lg bg-black/5 p-5">
                    <div className="text-center">
                        <h1 className="text-xl font-bold text-blue-500">{title}</h1>
                        <h5 className="px-20">Nikmati pengalaman terbaik dengan masuk ke akun untuk mengakses fitur lengkap kami.</h5>
                    </div>

                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

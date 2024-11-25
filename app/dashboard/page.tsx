import { auth } from '@/auth'
import Mainlayout from '@/layouts/main-layout'
import { CircleUser } from 'lucide-react'
import React from 'react'

export default async function Page() {
    const session = await auth()

    return (
        <Mainlayout data={session}>
            <div className="">

                <div className="grid grid-cols-4">
                    <div className="bg-gradient-to-br from-gray-500 to-blue-400 text-white w-full px-3 py-2 rounded-md shadow-lg">
                        <h1 className="font-semibold inline-flex flex-row-reverse items-center justify-between w-full">
                            <CircleUser className='w-5 h-5'/>
                            Jumlah Siswa
                        </h1>
                        <h1 className="font-bold text-2xl">20 <span className="text-sm">Siswa</span></h1>
                    </div>
                </div>


            </div>
        </Mainlayout>
    )
}

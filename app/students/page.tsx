import { auth } from '@/auth'
import Mainlayout from '@/layouts/main-layout'
import NavBanner from '@/layouts/nav-banner'
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function Page() {
    const session = await auth()

    return (
        <Mainlayout data={session}>
            <NavBanner icon={<FaRegUser />} title="daftar siswa" />

            <div className="mt-2 px-3 py-1 w-full flex items-center justify-between">
                <div className="flex gap-4 flex-row w-3/4">
                    <div className="relative w-full flex items-center">
                        <input type="text" placeholder='Cari Siswa' className='px-3 pl-8 py-1 w-full rounded-md border' />
                        <BiSearch className="absolute text-xl ml-2" />
                    </div>
                    <button className="btn-filter">Filter</button>

                </div>
                <div className="flex items-center">
                    <Link href="students/create-students" className='inline-flex items-center justify-center btn-add'>
                        <Plus />
                        Tambah Siswa</Link>
                </div>
            </div>

        </Mainlayout>
    )
}

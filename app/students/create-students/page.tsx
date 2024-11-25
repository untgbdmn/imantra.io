import { auth } from '@/auth'
import Mainlayout from '@/layouts/main-layout'
import NavBanner from '@/layouts/nav-banner'
import Link from 'next/link';
import React from 'react'
import { FaRegUser } from "react-icons/fa";

export default async function Page() {
    const session = await auth()

    return (
        <Mainlayout data={session}>
            <NavBanner icon={<FaRegUser />} title="tambah data  siswa" />

            <div className="mt-2">

                <form action="" className="">
                    <div className="flex items-center justify-end">
                        <Link href="/students" className='btn-cancel'>Batal</Link>
                    </div>
                </form>

            </div>

        </Mainlayout>
    )
}

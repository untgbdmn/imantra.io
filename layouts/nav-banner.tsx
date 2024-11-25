import React, { ReactNode } from 'react';

interface NavBannerProps {
    icon?: ReactNode;
    title: string;
}

export default function NavBanner({ icon, title }: NavBannerProps) {
    return (
        <div className="">
            <div className="flex flex-row items-center gap-3 w-1/3">
                <div className="bg-gray-200 row-span-2 p-5 flex rounded-lg shadow-lg items-center justify-center">
                    {icon && <div className='text-xl'>{icon}</div>}
                </div>

                <div className="">
                    <h1 className="text-xs font-normal">iMantra.io Panel</h1>
                    <h1 className="text-xl font-bold capitalize">{title}</h1>
                </div>
            </div>
        </div>
    );
}

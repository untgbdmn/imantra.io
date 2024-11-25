import Link from 'next/link';
import React from 'react';
import { LucideIcon } from "lucide-react";
import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';

interface LinkProps {
    url: string;
    title: string;
    icon?: LucideIcon;
    children?: React.ReactNode;
}

export default function NavPrimary({ url, title, icon: Icon }: LinkProps) {
    const pathname = usePathname();
    const parentUrl = url;
    const isActive = pathname.startsWith(parentUrl);

    return (
        <Link href={url} passHref>
            <SidebarGroupContent className='px-2'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild size="sm">
                            <div className={`flex items-center p-2 rounded-md ${isActive ? 'bg-black/5 pl-3.5' : ''}`}>
                                {Icon && <Icon className="mr-2" />}
                                <span className='text-sm'>{title}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </Link>
    );
}

"use client"

import * as React from "react"
import {
    Cog,
    House,
    User,
} from "lucide-react"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import NavPrimary from "./nav-primary"

const link = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
}

interface AppSidebarProps {
    data?: {
        user?: {
            name: string;
            email: string;
        }
    };
}
export function AppSidebar({ data }: AppSidebarProps) {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Cog className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">iMantra.Io</span>
                                    <span className="truncate text-xs">Managemen App</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-3">

                <NavPrimary url="/dashboard" icon={House} title="Dashboard" />
                <NavPrimary url="/students" icon={User} title="Siswa" />

            </SidebarContent>
            <SidebarFooter>
                <NavUser user={link.user} data={data} />
            </SidebarFooter>
        </Sidebar>
    )
}

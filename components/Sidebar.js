import React from 'react'
import{
    ChevronDownIcon,ShoppingBagIcon, UserGroupIcon
}from "@heroicons/react/outline";
import{
    CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon
}from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';
import SidebarRow from './SidebarRow';

function Sidebar() {
    const {data:session, loading} = useSession();

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[400px]'>
            <SidebarRow src={session.user.image} title={session.user.name}></SidebarRow>
            <SidebarRow Icon={UsersIcon} title="Friends"></SidebarRow>
            <SidebarRow Icon={UserGroupIcon} title="Groups"></SidebarRow>
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"></SidebarRow>
            <SidebarRow Icon={DesktopComputerIcon} title="Memories"></SidebarRow>
            <SidebarRow Icon={ChevronDownIcon} title="See More"></SidebarRow>
        </div>
    )
}

export default Sidebar

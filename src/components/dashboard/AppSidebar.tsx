import { Home, Award, FileText, History, BadgePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from '@/components/ui/sidebar';
import getUser from '@/utils/getUser';
import Logo from '@/components/shared/Logo';

const studentItems = [
    {
        title: 'Home',
        url: '/dashboard',
        icon: Home,
    },
    {
        title: 'Quiz Test',
        url: '/dashboard/student/quiz',
        icon: FileText,
    },
    {
        title: 'My Previous Tests',
        url: '/dashboard/student/my-tests',
        icon: History,
    },
    {
        title: 'Certificate',
        url: '/dashboard/student/certificate',
        icon: Award,
    },
];

const adminItems = [
    {
        title: 'Home',
        url: '/dashboard',
        icon: Home,
    },
    {
        title: 'Create Quiz',
        url: '/dashboard/admin/create-quiz',
        icon: BadgePlus,
    },
];

const AppSidebar = () => {
    const decodedUser = getUser();

    const items = decodedUser?.role === 'student' ? studentItems : adminItems;

    return (
        <Sidebar>
            <SidebarHeader className="p-4 border-b">
                <Logo size="sm" />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;

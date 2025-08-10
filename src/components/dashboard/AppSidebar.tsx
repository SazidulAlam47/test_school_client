import { Home, Award, FileText, History } from 'lucide-react';
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
} from '@/components/ui/sidebar';
import getUser from '@/utils/getUser';

const studentItems = [
    {
        title: 'Home',
        url: '/dashboard/student',
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

const AppSidebar = () => {
    const decodedUser = getUser();

    const items = decodedUser?.role === 'student' ? studentItems : [];

    return (
        <Sidebar>
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

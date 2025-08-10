import AppSidebar from '@/components/dashboard/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="p-3">
                <SidebarTrigger />
                <Outlet />
            </main>
        </SidebarProvider>
    );
};

export default DashboardLayout;

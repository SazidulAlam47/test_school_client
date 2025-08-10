import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="min-h-[100dvh]">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

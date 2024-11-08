// Layout.tsx
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {  return (
    <div className="flex flex-col">
        <Sidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
          <Header />
          {children}
          <Footer />
      </div>
    </div>
  );
};

export default Layout;

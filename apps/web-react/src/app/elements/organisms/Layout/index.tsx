import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <div className="min-h-screen pt-16 bg-primary-neutral-100">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;

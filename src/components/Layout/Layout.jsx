import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-[70vh]">
        <Suspense fallback={<Loader />}>
          <main>{children}</main>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

import { Suspense } from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <main>{children}</main>
      </Suspense>
    </>
  );
};

export default Layout;

import Head from 'next/head';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import NavBar from './Header/NavBar';
import Footer from './footer/footer';

const Layout = ({ title, children, description }) => {
  const defaultTitle = 'Light in the Darkness: A Masonic Odyssey';
  const defaultDescription = 'Showing the Truth about Freemasonry';
  return (
    <>
      <Head>
        <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content={description || defaultDescription} />
      </Head>
      <NavBar />
      <motion.div>
        <ToastContainer position="top-center" limit="1" />
        <main className="overflow-hidden">{children}</main>
      </motion.div>
      <Footer />
    </>
  );
};
export default Layout;

import Head from 'next/head';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import NavBar from './Header/NavBar';

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
      <motion.div>
        <ToastContainer position="top-center" limit="1" />
        <NavBar />
        <section className="overflow-hidden">{children}</section>
      </motion.div>
    </>
  );
};
export default Layout;

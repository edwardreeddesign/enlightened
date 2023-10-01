import Link from 'next/link';

const Full = () => {
  return (
    <nav className="fixed top-0 w-full flex flex-col z-50">
      <div className="flex justify-between items-center  px-6 lg:px-10 bg-main1 shadow-shadow2">
        <Link
          href="/"
          className="z-50 py-2 flex items-center text-accent1 gap-2"
        >
          <h1>Light in the Darkness: A Masonic Odyssey</h1>
        </Link>
      </div>
    </nav>
  );
};
export default Full;

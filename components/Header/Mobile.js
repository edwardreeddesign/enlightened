import { useEffect, useState } from 'react';
import { getCategories } from '../../services';
import Link from 'next/link';
import { useRouter } from 'next/router';

const categories = [
  {
    name: 'Politics',
    slug: 'politics',
  },
  {
    name: 'Conspiracies',
    slug: 'conspiracies',
  },
];

const MobileNav = () => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getCategories().then(newCategories => setCategories(newCategories));
  }, []);

  return (
    <nav className="flex items-center justify-between w-full  m-auto px-6 py-4 mb-9 shadow-shadow1">
      <Link href="/">
        <h1>Light in the Darkness</h1>
      </Link>
      <div className="py-4 cursor-pointer z-50" onClick={toggle}>
        <div className={`line ${isOpen ? 'line1-open' : ''}`} />
        <div className={`line line2 ${isOpen ? 'line2-open' : ''}`} />
        <div className={`line ${isOpen ? 'line3-open' : ''}`} />
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-main1/90 p-0 pt-8 pb-16 m-0 z-40 duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bottom-${isOpen ? '0' : '100%'} h-${isOpen ? 'screen' : '0'}`}
      >
        <div className="h-full flex flex-col justify-around items-center relative pt-10">
          {categories.map(category => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <ul>
                <li>{category.name}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default MobileNav;

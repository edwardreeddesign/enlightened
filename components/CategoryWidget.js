import { useEffect, useState } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';

const CategoryWidget = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(newCategories => setCategories(newCategories));
  }, []);

  return (
    <article className="rounded-xl p-8 mb-20 shadow-shadow1">
      <h1
        className="text-xl mb-2 font-extralight tracking-widest
      "
      >
        Categories
      </h1>
      {categories.map(category => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className="cursor-pointer block pb-1 text-xl"
        >
          {category.name}
        </Link>
      ))}
    </article>
  );
};
export default CategoryWidget;

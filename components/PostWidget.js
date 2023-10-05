import { useEffect, useState } from 'react';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';
import moment from 'moment';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then(result => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then(result => {
        setRelatedPosts(result);
      });
    }
  }, [categories, slug]);

  return (
    <article className="bg-white shadow-shadow1 rounded-lg p-8 mb-8 ">
      <h1 className="text-xl mb-2 font-extralight tracking-widest">
        {slug ? 'Related Posts ' : 'Recent Posts'}
      </h1>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <Image
            alt={post.title}
            src={post.featuredImage.url}
            height="60"
            width="60"
          />
          <div className="flex-1 ml-4">
            <p className="leading-4 text-sm text-gray-500">
              {moment(post.createdAt).format('MMM. DD, YYYY')}
            </p>
          </div>
        </div>
      ))}
    </article>
  );
};
export default PostWidget;

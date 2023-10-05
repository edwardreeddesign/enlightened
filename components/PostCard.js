import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="pb-12 bg-white shadow-shadow1 rounded-lg text-black mb-12">
      <div className="relative overflow-hidden pb-80 mb-5">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          className="absolute object-top h-[20rem] object-cover rounded-t-lg shadow-shadow1"
        />
      </div>
      <Link href={`/post/${post.slug}`}>
        <h1 className="text-center mb-8 cursor-pointer text-2xl leading-7 transition-none duration-300 hover:text-[#493f3f]">
          {post.title}
        </h1>
      </Link>
      <div className="block text-center justify-center items-center mb-8 w-full">
        <div className="flex justify-center items-center w-full mb-8 lg:mb-0 lg:w-auto ">
          <Image
            src={post.author.photo.url}
            alt={post.name}
            height="30"
            width="30"
            className="rounded-[50%] align-middle object-cover"
          />
          <p className="inline align-middle text-gray-500 ml-4 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="flex justify-center align-center text-gray-500 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            width="1.5rem"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p>{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        </div>
      </div>
      <div className="px-6 ">
        <span>{post.excerpt}</span>
      </div>
      <div className="flex items-center justify-center mt-8">
        <Link
          href={`/post/${post.slug}`}
          className="px-5 py-4 border-none rounded-lg text-lg transition-all duration-300 shadow-shadow1 bg-[#f86464] hover:bg-[#c75151]"
        >
          Continue Reading...
        </Link>
      </div>
    </div>
  );
};
export default PostCard;

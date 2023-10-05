import moment from 'moment';
import Image from 'next/image';
import { getContentFragment } from '../helpers/textStyle';

const PostDetail = ({ post }) => {
  return (
    <main className="shadow-shadow1  rounded-lg mx-8 pb-12 mb-8  overflow-hidden">
      <div className="relative overflow-hidden object-top object-cover shadow-shadow2 rounded-t-lg h-96 w-full   mb-7 ">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          fill
          className="w-full object-cover"
        />
      </div>
      <div className="py-5 px-4 md:px-6 lg:px-20 lg:p-0">
        <div className="relative overflow-hidden mb-6 object-cover">
          <div className="hidden md:flex md:items-center md:justify-center lg:w-full lg:mb-0">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              height="30"
              width="30"
              className="rounded-[100%] object-cover mr-4"
            />
            <p>{post.author.name}</p>
          </div>
          <div className="flex items-center gap-1 text-[#6f6e6e]">
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
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="text-2xl mb-4">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </main>
  );
};
export default PostDetail;

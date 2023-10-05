import CategoryWidget from '../../components/CategoryWidget';
import PostCard from '../../components/PostCard';
import { getCategories } from '../../services';

const CategoryPost = ({ posts }) => {
  return (
    <article className="mb-8 mx-auto px-9">
      <div>
        <div>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div>
          <CategoryWidget />
        </div>
      </div>
    </article>
  );
};
export default CategoryPost;

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug: slug } })),
    fallback: true,
  };
}

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';
import PostWidget from '../../components/PostWidget';
import { getPostDetails, getPosts } from '../../services';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.fallback || !post) {
    return <p className="text-red-500 text-4xl">Loading...</p>;
  }
  return (
    <Layout title={post && post.title}>
      <main className="w-full m-auto px-6 lg:px-8 mb-10   ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8 ">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            {/* <Comments slug={post.slug} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4 sticky top-8">
            <div className="relative top-8 lg:sticky ">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map(category => category.slug)}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

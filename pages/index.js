import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { getPosts } from '../services';
import PostCard from '../components/PostCard';
import PostWidget from '../components/PostWidget';
import CategoryWidget from '../components/CategoryWidget';

export default function Home({ posts }) {
  return (
    <Layout title="Home">
      <main className="grid grid-cols-1 gap-12 mx-auto my-8 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, idx) => (
            <PostCard post={post.node} key={idx} />
          ))}
        </div>
        <div className="col-span1 lg:col-span-4">
          <div className="relative top-8">
            <PostWidget />
            <CategoryWidget />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

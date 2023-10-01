import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { getPosts } from '../services';
import PostCard from '../components/PostCard';

export default function Home({ posts }) {
  return (
    <Layout title="Home">
      <main className="grid grid-cols-1 gap-12 mx-auto my-8 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, idx) => (
            <PostCard post={post.node} key={idx} />
          ))}
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

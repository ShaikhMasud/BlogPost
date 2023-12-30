import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";

export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <main className="max-w-screen-xl mx-auto p-8">
      <Hero />

      <section >
      <div className="relative bg-gradient-to-r from-teal-200 to-purple-200 p-12 text-teal-800 text-center font-bold shadow-lg rounded-md overflow-hidden  mt-8">
      <div className="mb-8 mx-auto">
      </div>
      <div className="text-5xl font-serif leading-tight mb-4">My Blog Posts</div>
      <div className="h-1 w-20 bg-teal-800 mx-auto mb-8"></div>
      <p className="text-lg text-gray-700">
      Welcome to my vibrant corner of the internet! Explore my latest blog posts.
      </p>
    </div>
      </section>

      <BlogContent posts={posts} />
    </main>
  );
}

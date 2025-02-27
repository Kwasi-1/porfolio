import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Layout from '../Layout';

const blogPosts = {
  "future-of-frontend": {
    title: "The Future of Frontend Development",
    content: `
      Web development is constantly evolving, with new technologies shaping the way we build and interact with websites. 
      From AI-powered tools to next-gen frameworks like Qwik and Solid.js, the frontend landscape is becoming faster and more dynamic.
      
      In this post, we'll explore how these innovations are transforming user experiences and what developers need to stay ahead.
    `
  },
  "optimizing-performance": {
    title: "Optimizing Web Performance for Better UX",
    content: `
      A slow website kills engagement. Performance optimization is no longer optional; it's essential for a good user experience.
      Techniques like lazy loading, code splitting, and caching can significantly improve load times.

      This post covers best practices to make your web apps faster, smoother, and more efficient.
    `
  }
};

const BlogPost = () => {
  const { postId } = useParams();
  const blog = blogPosts[postId];

  if (!blog) return <h1 className="text-center text-3xl text-white">Blog Post Not Found</h1>;

  return (
    <Layout backgroundColor="#1a1818">
      <div className="flex flex-col lg:flex-row bg-light text-primary min-h-screen">
        <Sidebar />
        <div className="mx-auto pt-[20%] max-w-[80%] lg:pt-[10%] text-left">
          <h1 className="font-custom text-[6vw] font-light mb-6">{blog.title}</h1>
          <p className="text-[14px] lg:text-[17px] leading-[1.8] font-body whitespace-pre-line">{blog.content}</p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

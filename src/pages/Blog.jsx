import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Layout from '../Layout';

const blogs = [
  {
    title: 'The Future of Frontend Development',
    excerpt: 'Web development is evolving fast. Explore the latest trends shaping the future of frontend development, from AI-powered tools to new frameworks.',
    link: '/blog/future-of-frontend'
  },
  {
    title: 'Optimizing Web Performance for Better UX',
    excerpt: 'Slow websites kill user engagement. Learn how to enhance speed, reduce load times, and create a seamless browsing experience.',
    link: '/blog/optimizing-performance'
  }
];

const Blog = () => {
  return (
    <Layout backgroundColor="#1a1818">
      <div className="flex flex-col lg:flex-row bg-dark text-accent min-h-screen">
        <Sidebar />

        <div className="flex flex-col mx-auto max-w-[80%] pt-[20%] lg:pt-[10%] text-left ">
          <h1 className="font-custom text-[14vw] font-light mb-12">Blog</h1>

          {blogs.map((blog, index) => (
            <div key={index} className="mb-10 pb-5 border-b border-gray-700 w-full lg:w-[90%]">
              <h2 className="text-xl lg:text-2xl font-light mb-3">{blog.title}</h2>
              <p className="text-[13px] text-sm mb-4 tracking-wider font-body">{blog.excerpt}</p>
              <Link to={blog.link} className="text-accent hover:underline text-lg font-body">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

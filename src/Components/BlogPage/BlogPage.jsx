import React from "react";

const BlogPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Page Header */}
      <header className="bg-blue-200 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="text-lg mt-4 text-gray-700">
            Stay updated with our latest articles and job search tips.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <section className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <a>10 Tips for a Successful Job Interview</a>
              </h2>
              <p className="text-gray-600">Posted on June 15, 2023</p>
              <p className="mt-4 text-gray-700">
                Preparing for a job interview? Here are 10 tips to help you
                succeed and land your dream job.
              </p>
              <a className="text-blue-500 mt-4 inline-block">Read More</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <a>Writing an Effective Resume</a>
              </h2>
              <p className="text-gray-600">Posted on June 10, 2023</p>
              <p className="mt-4 text-gray-700">
                Your resume is your ticket to job opportunities. Learn how to
                craft an effective resume that stands out.
              </p>
              <a className="text-blue-500 mt-4 inline-block">Read More</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <a>Navigating the Job Market During a Pandemic</a>
              </h2>
              <p className="text-gray-600">Posted on June 5, 2023</p>
              <p className="mt-4 text-gray-700">
                The job market has changed significantly. Discover strategies
                for job hunting during uncertain times.
              </p>
              {/* href="/blog/post3" */}
              <a className="text-blue-500 mt-4 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

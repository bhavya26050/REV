import React from "react";

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-transparent py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Explore Opportunities</h1>

      {/* Section 1: Categories */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              description: "Build robust and scalable websites.",
              image: "https://source.unsplash.com/300x200/?technology,web",
            },
            {
              title: "Graphic Design",
              description: "Design stunning visuals and branding.",
              image: "https://source.unsplash.com/300x200/?design,creative",
            },
            {
              title: "Digital Marketing",
              description: "Expand your reach with strategic campaigns.",
              image: "https://source.unsplash.com/300x200/?marketing,digital",
            },
            {
              title: "Content Writing",
              description: "Create engaging and impactful content.",
              image: "https://source.unsplash.com/300x200/?writing,blog",
            },
            {
              title: "Data Analysis",
              description: "Uncover insights with data expertise.",
              image: "https://source.unsplash.com/300x200/?data,analysis",
            },
            {
              title: "Mobile App Development",
              description: "Develop cutting-edge mobile applications.",
              image: "https://source.unsplash.com/300x200/?mobile,app",
            },
          ].map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Featured Projects */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce Website",
              budget: "$500 - $1,000",
              description: "Develop a responsive and user-friendly e-commerce platform.",
              image: "https://source.unsplash.com/300x200/?ecommerce,shopping",
            },
            {
              title: "Logo Design",
              budget: "$100 - $300",
              description: "Create a unique and impactful brand logo.",
              image: "https://source.unsplash.com/300x200/?logo,design",
            },
            {
              title: "SEO Optimization",
              budget: "$200 - $400",
              description: "Boost search engine rankings effectively.",
              image: "https://source.unsplash.com/300x200/?seo,optimization",
            },
            {
              title: "Photography Portfolio",
              budget: "$400 - $600",
              description: "Showcase stunning visuals through a custom portfolio.",
              image: "https://source.unsplash.com/300x200/?photography,portfolio",
            },
            {
              title: "Mobile App UI/UX Design",
              budget: "$800 - $1,200",
              description: "Design intuitive and attractive app interfaces.",
              image: "https://source.unsplash.com/300x200/?ui,ux",
            },
            {
              title: "Social Media Campaign",
              budget: "$300 - $600",
              description: "Run engaging campaigns on social platforms.",
              image: "https://source.unsplash.com/300x200/?social,media",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-indigo-600 mt-4 font-semibold">Budget: {project.budget}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Expert Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Expert Tips for Success</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Freelancing Basics",
              content: "Understand the fundamentals to start your freelancing journey.",
              image: "https://source.unsplash.com/300x200/?freelancing,business",
            },
            {
              title: "Networking Tips",
              content: "Learn how to connect and grow your professional network.",
              image: "https://source.unsplash.com/300x200/?networking,people",
            },
            {
              title: "Time Management",
              content: "Master productivity with time-tested strategies.",
              image: "https://source.unsplash.com/300x200/?time,management",
            },
            {
              title: "Client Communication",
              content: "Build strong client relationships through effective communication.",
              image: "https://source.unsplash.com/300x200/?communication,work",
            },
            {
              title: "Skill Development",
              content: "Continuously improve and add to your skillset.",
              image: "https://source.unsplash.com/300x200/?skills,learning",
            },
            {
              title: "Pricing Strategies",
              content: "Learn how to price your services competitively.",
              image: "https://source.unsplash.com/300x200/?pricing,services",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img src={tip.image} alt={tip.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{tip.title}</h3>
                <p className="text-gray-600 mt-2">{tip.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="text-center py-12 bg-indigo-600 text-white rounded-lg mt-8">
        <h2 className="text-3xl font-semibold">Ready to Start Your Journey?</h2>
        <p className="mt-4 text-lg">
          Join thousands of successful freelancers and clients. Sign up today!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default ExplorePage;


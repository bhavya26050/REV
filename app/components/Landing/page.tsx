'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faPenNib, faChartLine, faKeyboard, faVideo,
  faRobot, faMusic, faBriefcase, faCommentsDollar
} from '@fortawesome/free-solid-svg-icons';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

const Landing = () => {
  const iconsMap = {
    programming: faCode,
    design: faPenNib,
    marketing: faChartLine,
    writing: faKeyboard,
    animation: faVideo,
    ai: faRobot,
    music: faMusic,
    business: faBriefcase,
    consulting: faCommentsDollar,
  };

  const [services] = useState([
    { icon: "programming", title: "Programming & Tech", link: "/services/programming" },
    { icon: "design", title: "Graphics & Design", link: "/services/design" },
    { icon: "marketing", title: "Digital Marketing", link: "/services/marketing" },
    { icon: "writing", title: "Writing & Translation", link: "/services/writing" },
    { icon: "animation", title: "Video & Animation", link: "/services/animation" },
    { icon: "ai", title: "AI Services", link: "/services/ai" },
    { icon: "music", title: "Music & Audio", link: "/services/music" },
    { icon: "business", title: "Business", link: "/services/business" },
    { icon: "consulting", title: "Consulting", link: "/services/consulting" },
  ]);

  const testimonials = [
    { name: "John Doe", feedback: "REVV has transformed my freelance journey! Highly recommended!", avatar: "/avatars/john.jpg" },
    { name: "Jane Smith", feedback: "An amazing platform! Got the perfect designer.", avatar: "/avatars/jane.jpg" },
    { name: "Michael Johnson", feedback: "REVV is my go-to platform for all business needs.", avatar: "/avatars/michael.jpg" },
  ];

  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value) {
      setSearchSuggestions(services.filter(service =>
        service.title.toLowerCase().includes(e.target.value.toLowerCase())
      ));
    } else {
      setSearchSuggestions([]);
    }
  };

  return (
    <div>
      <Head><title>REVV</title></Head>

      <Header isLoggedIn={undefined} user={undefined} />

      {/* Hero Section */}
      <section className="bg-cover bg-center bg-[url('/images/background-light.jpg')] rounded-2xl text-white h-[600px] mx-4 flex flex-col justify-center items-center transition-all duration-300 p-4">
        <h1 className="text-5xl font-bold text-white mb-4 text-center typing-animation">
          Discover the perfect <span className="text-indigo-600">freelance</span> service instantly.
        </h1>
        <div className="flex justify-center mb-4 w-full relative">
          <input
            type="text"
            placeholder="Search for any service..."
            value={searchInput}
            onChange={handleSearchChange}
            className="px-4 py-2 w-full max-w-xs rounded-l-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-600 text-gray-700 transition-all duration-300"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-lg hover:text-black hover:bg-indigo-500 transition-colors duration-300">
            Search
          </button>
          {searchSuggestions.length > 0 && (
            <div className="absolute top-full mt-2 text-black bg-white shadow-lg rounded-lg w-full max-w-xs z-10">
              {searchSuggestions.map((suggestion, index) => (
                <Link key={index} href={suggestion.link} className="block px-4 py-2 hover:bg-indigo-100">
                  {suggestion.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center space-x-6">
          <img src="/icons/social.png" alt="Google" className="h-20" />
          <img src="/icons/meta.png" alt="Meta" className="h-20" />
          <img src="/icons/netflix.png" alt="Netflix" className="h-20" />
        </div>
      </section>

      <h2 className="text-white text-3xl font-bold text-center mb-8 transition-colors duration-300 mt-10">
        Popular services
      </h2>
      <div className="flex justify-center flex-wrap gap-4">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <div className="w-40 h-48 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 border-4 border-transparent hover:bg-indigo-50 hover:border-indigo-400 hover:scale-105 transform transition-transform duration-300 hover:shadow-lg">
              <FontAwesomeIcon icon={iconsMap[service.icon]} size="2x" className="mb-4 text-indigo-600" />
              <h3 className="text-gray-800 font-medium text-center transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="my-16">
        <h2 className="text-white text-3xl font-bold text-center mb-8 transition-colors duration-300">
          What Our Users Say
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-96 h-56 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 border-4 border-transparent hover:bg-indigo-50 hover:border-indigo-600 transition-all duration-300 hover:scale-105 transform">
              <img src={`https://randomuser.me/api/portraits/men/${index}.jpg`} alt={`${testimonial.name}'s avatar`} className="w-16 h-16 rounded-full mb-2" />
              <p className="text-gray-600 text-center italic">
                "{testimonial.feedback}"
              </p>
              <p className="text-gray-800 font-semibold mt-2">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="my-16">
        <h2 className="text-white text-3xl font-bold text-center mb-8 transition-colors duration-300">
          Resources for Freelancers
        </h2>
        <div className="flex justify-center flex-wrap gap-4">
          <Link href="/blog" className="w-64 h-32 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 border-4 border-transparent hover:bg-indigo-50 hover:border-indigo-600 transition-all duration-300">
            <h3 className="text-gray-800 font-medium text-center">Blog</h3>
            <p className="text-gray-600 text-center">Insights and tips for freelancers.</p>
          </Link>
          <Link href="/guides" className="w-64 h-32 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 border-4 border-transparent hover:bg-indigo-50 hover:border-indigo-600 transition-all duration-300">
            <h3 className="text-gray-800 font-medium text-center">Guides</h3>
            <p className="text-gray-600 text-center">How-to guides for maximizing your success.</p>
          </Link>
          <Link href="/webinars" className="w-64 h-32 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 border-4 border-transparent hover:bg-indigo-50 hover:border-indigo-600 transition-all duration-300">
            <h3 className="text-gray-800 font-medium text-center">Webinars</h3>
            <p className="text-gray-600 text-center">Live sessions with industry experts.</p>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="">
            <img className="relative text-center mt-16 rounded-xl mx-4 overflow-hidden" alt="hero" src="https://www.flexjobs.com/blog/wp-content/uploads/2018/12/27082207/Freelancers.png?w=1024" />
          </div>
          <div className="relative z-10 items-center flex flex-col text-white justify-center h-full px-4">
            <h2 className="text-4xl font-bold ml-5 mb-4">Ready to start your journey?</h2>
            <p className="text-xl ml-8 mb-8">Join thousands of freelancers and grow your career with REVV.</p>
            <Link href='./components/Registration'>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 transform">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-transparent py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose REVV?</h2>
          <p className="text-lg text-white">
            REVV connects you with top talent and provides an intuitive platform for freelancers and clients alike.
          </p>
        </div>
        <div className="flex justify-center gap-8">
          <div className="w-72 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Quality Talent</h3>
            <p className="text-gray-600">
              We bring the best freelancers to help you get your projects done.
            </p>
          </div>
          <div className="w-72 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Secure Payments</h3>
            <p className="text-gray-600">
              Safe and timely payment processing for both freelancers and clients.
            </p>
          </div>
          <div className="w-72 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is here to help you with any issues or queries, anytime.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="my-16 px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          {/* Question 1 */}
          <div className="bg-white rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="w-full text-left px-6 py-4 text-xl font-semibold text-gray-800 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 focus:outline-none flex justify-between items-center"
              onClick={() => document.getElementById('faq1').classList.toggle('hidden')}
            >
              <span>How do I get started as a freelancer?</span>
              <svg
                className="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div id="faq1" className="hidden px-6 py-4 text-gray-600">
              To get started, simply sign up as a freelancer, fill out your profile, and start bidding or offering your services.
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="w-full text-left px-6 py-4 text-xl font-semibold text-gray-800 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 focus:outline-none flex justify-between items-center"
              onClick={() => document.getElementById('faq2').classList.toggle('hidden')}
            >
              <span>How do I find clients?</span>
              <svg
                className="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div id="faq2" className="hidden px-6 py-4 text-gray-600">
              You can find clients by browsing job listings, submitting proposals, and showcasing your work to stand out.
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-lg shadow-md mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">
            <button
              className="w-full text-left px-6 py-4 text-xl font-semibold text-gray-800 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 focus:outline-none flex justify-between items-center"
              onClick={() => document.getElementById('faq3').classList.toggle('hidden')}
            >
              <span>Is REVV safe to use for payments?</span>
              <svg
                className="w-6 h-6 transform transition-transform duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div id="faq3" className="hidden px-6 py-4 text-gray-600">
              Yes, REVV offers secure payment processing, ensuring both freelancers and clients are protected.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;

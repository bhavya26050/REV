

"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import router

const Page = () => {
  const router = useRouter(); // Get the router instance

  const handleBuyPlan = (plan, price) => {
    router.push(`/Payment?plan=${plan}&price=${price}`); // Redirect to the Payment page
  };

  return (
    <div className="w-full min-h-screen items-center flex justify-center flex-col bg-white">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-0"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <h1 className="text-indigo-600 text-lg mt-20">Pricing</h1>
      <br />
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Pricing plans for teams of all sizes
        </h1>
      </div>
      <div>
        <p className="text-lg mb-8">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="flex flex-nowrap overflow-x-auto gap-8">
          <div className="w-80 px-8 py-6 border-2 rounded-xl border-gray-200 border-opacity-60 hover:border-indigo-600 bg-white">
            <h2 className="text-lg font-bold mb-2 mt-5">Freelancer</h2>
            <p className="text-sm mb-4 mt-3">
              The essentials to provide your best work for clients.
            </p>
            <p className="text-4xl font-bold mb-2">$144/Monthly</p>
            <button
              className="border-1-2 hover:bg-indigo-400 hover:text-white text-indigo-500 font-bold mt-5 py-2 px-4 w-full rounded"
              onClick={() => handleBuyPlan("Freelancer", 144)} // Corrected this line
            >
              Buy plan
            </button>
            <ul className="list-none mb-4 space-y-2 mt-10">
              <li>
                <span className="text-indigo-800">✓</span> 5 products
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Up to 1,000
                subscribers
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Basic analytics
              </li>
              <li>
                <span className="text-indigo-800">✓</span> 48-hour support
                response time
              </li>
            </ul>
          </div>

          <div className="w-80 px-8 py-6 border-2 rounded-xl border-gray-200 border-opacity-60 hover:border-indigo-600 bg-white">
            <h2 className="text-lg font-bold mb-2 mt-5">Startup</h2>
            <p className="text-sm mb-4">
              A plan that scales with your rapidly growing business.
            </p>
            <p className="text-4xl font-bold mb-2 mt-3">$288/Monthly</p>
            <button
              className="border-1-2 hover:bg-indigo-400 hover:text-white text-indigo-500 font-bold mt-5 py-2 px-4 w-full rounded"
              onClick={() => handleBuyPlan("Startup", 288)} // Corrected this line
            >
              Buy plan
            </button>
            <ul className="list-none mb-4 space-y-2 mt-10">
              <li>
                <span className="text-indigo-800">✓</span> 25 products
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Up to 10,000
                subscribers
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Advanced analytics
              </li>
              <li>
                <span className="text-indigo-800">✓</span> 24-hour support
                response time
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Marketing
                automations
              </li>
            </ul>
          </div>

          <div className="w-80 px-8 py-6 border-2 rounded-xl border-gray-200 border-opacity-60 hover:border-indigo-600 bg-white">
            <h2 className="text-lg font-bold mb-2 mt-5">Enterprise</h2>
            <p className="text-sm mb-4">
              Dedicated support and infrastructure for your company.
            </p>
            <p className="text-4xl font-bold mb-2 mt-3">$576/Monthly</p>
            <button
              className="border-1-2 hover:bg-indigo-400 hover:text-white text-indigo-500 font-bold mt-5 py-2 px-4 w-full rounded"
              onClick={() => handleBuyPlan("Enterprise", 576)} // Corrected this line
            >
              Buy plan
            </button>
            <ul className="list-none mb-4 space-y-2 mt-10">
              <li>
                <span className="text-indigo-800">✓</span> Unlimited products
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Unlimited subscribers
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Advanced analytics
              </li>
              <li>
                <span className="text-indigo-800">✓</span> 1-hour, dedicated
                support response time
              </li>
              <li>
                <span className="text-indigo-800">✓</span> Custom reporting
                tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;



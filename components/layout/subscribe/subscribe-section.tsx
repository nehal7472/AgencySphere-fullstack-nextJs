import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function SubscribeSection({}: Props) {
  return (
    <section className="py-16 flex justify-center items-center bg-white dark:bg-gray-900">
      <div className="max-w-2xl w-full text-center px-4">
        {/* Top label */}
        <p className="text-green-600 font-medium uppercase tracking-wide">
          Subscribe
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
          Subscribe To Get The Latest <br /> News About Us
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Please drop your email below to get daily update about what we do
        </p>

        {/* Form */}
        <form className="mt-6 flex items-center border rounded-lg overflow-hidden max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 px-4 py-3 outline-none text-gray-700 dark:text-gray-200"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

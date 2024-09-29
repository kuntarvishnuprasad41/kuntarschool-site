import React from "react";
// Assuming this is where you add your custom animations and image layout

const TopSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-teal-500 text-white">
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="School Logo" className="h-12" />
          <h1 className="text-2xl font-bold">A.U.P.S Kuntar</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#programs" className="hover:underline">
            Programs
          </a>
          <a href="#shops" className="hover:underline">
            Shops
          </a>
          <a href="#pages" className="hover:underline">
            Pages
          </a>
          <a href="#news" className="hover:underline">
            News
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4 items-center">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">
            Apply Now
          </button>
          <div className="md:hidden block">
            <button className="text-white text-2xl">☰</button>
          </div>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="text-center bg-green-500 text-white py-2 text-sm">
        🎉 Applications open 20-24 April! 🎉
      </div>

      {/* Main Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16">
        <div className="md:w-1/2 text-left">
          <h2 className="text-lg text-teal-600 font-semibold">
            Kindergarten Program
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Children’s Education Curriculum
          </h1>
          <p className="text-gray-600 mb-6">Admission Open 20-24 April</p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500">
            Apply Now
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="custom-image-wrapper">
            <img
              src="/path/to/kids-image.jpg"
              alt="Kids Playing"
              className="custom-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSection;

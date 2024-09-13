import React from 'react';
import Navbar from '../layout/header';
import Footer from '../layout/footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Home Page</h2>
        <p>Welcome to the home page!</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

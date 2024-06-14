import React from 'react';

import Header from '../../components/layout/Header';
import MainContent from './MainContent';
import Footer from '../../components/layout/Footer';

const Home = () => {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        <div className="flex flex-col items-center mt-10 ">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white w-full h-screen">
      <div className="flex flex-col items-center justify-center mt-10 gap-3">
        <h1>Home</h1>
        <Link to="/auDigital">Sair</Link>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center w-full mb-5">
        <span>IMAGEM</span>
        <p className="text-2xl">
          AuDigital: Transformando o cuidado dos peludos em uma experiência
          digital perfeita!
        </p>
        <span>IMAGEM</span>
      </div>
      <div className="bg-primary w-full h-12 flex justify-around items-center">
        <span>ICONHOME</span>
        <span>ICONSEARCH</span>
        <span>ICONPERSON</span>
        <Link to="/auDigital">Sair</Link>
        <span>LOGO</span>
      </div>
    </>
  );
};

export default Header;

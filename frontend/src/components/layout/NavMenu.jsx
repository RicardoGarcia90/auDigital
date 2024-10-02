import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';

import logo from '../../assets/imagens/logo-svg-semFundo.svg';

import servicesData from '../../data/services.json'

const NavMenu = () => {
  return (
    <div className="bg-primary flex flex-col items-center w-full h-full p-2 gap-4">

      {/* BACK HOME */}
      <div className=" bg-bgTheme rounded-full p-3 hover:cursor-pointer hover:scale-105 duration-150">
        <Link to="/auDigital/Home" className='flex flex-col items-center justify-center'>
          <GoHomeFill className="text-2xl text-primary" />
          <span>Home</span>
        </Link>
      </div>

      {/* MENU LIST */}
      <div className="flex-grow">
        <ul className="flex flex-col items-center gap-2">
          {servicesData.map(service => (
            <li key={service.id} className="bg-greenLight hover:bg-bgTheme  hover:cursor-pointer w-full text-center p-2 rounded-md shadow-md hover:scale-105 duration-150">
              {service.name}
            </li>
          ))}
        </ul>
      </div>

      {/* USER - EXIT - LOGO */}
      <div className="flex flex-col items-center gap-4">
        <FaUser className="text-2xl text-bgTheme hover:scale-125 duration-150 cursor-pointer" />

        <Link to="/auDigital">
          <RxExit className="text-3xl text-bgTheme hover:scale-125 duration-150 cursor-pointer" />
        </Link>

        <img src={logo} alt="Logo" className="w-24 h-auto" />
      </div>
    </div>
  );
};

export default NavMenu;

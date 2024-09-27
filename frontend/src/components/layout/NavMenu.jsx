import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';

import logo from '../../assets/imagens/logo-svg-semFundo.svg';

const NavMenu = () => {
  return (
    <>
      <div className="bg-primary h-full w-20 flex flex-col justify-between items-center">
        <Link
          to={'/auDigital/Home'}
          className="text-primary bg-bgTheme p-3 mt-2 rounded-full hover:scale-110 duration-150"
        >
          <GoHomeFill className="text-2xl" />
        </Link>

        <div className="flex flex-col justify-between items-center gap-6 mr-3">
          <FaUser className="text-2xl text-bgTheme hover:scale-125 duration-150 cursor-pointer" />

          <Link to="/auDigital">
            <RxExit className="text-3xl text-bgTheme" />
          </Link>

          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default NavMenu;

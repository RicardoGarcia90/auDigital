import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';
import { Input } from '../ui/Input';

const NavMenuHome = () => {
  return (
    <>
      <div className="bg-primary w-full h-14 flex justify-between items-center">
        <div className="flex justify-center items-center gap-4 ml-3">
          <Link className="text-primary bg-bgTheme p-2 rounded-full hover:scale-110 duration-150">
            <GoHomeFill className="text-2xl" />
          </Link>
          <p className="text-xl">Olá, Ricardo!</p>
        </div>

        <div className="flex justify-between items-center gap-6 mr-3">
          <Input styleInput={'px-10 py-2 rounded-xl bg-bgTheme text-xl'} />

          <FaUser className="text-2xl text-bgTheme hover:scale-125 duration-150 cursor-pointer" />

          <Link to="/auDigital">
            <RxExit className="text-3xl text-bgTheme" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavMenuHome;

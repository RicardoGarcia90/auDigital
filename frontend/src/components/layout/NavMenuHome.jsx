import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';

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
          <div className="inline-block relative">
            <button>
              <FaSearch className="absolute left-2 top-6 transform translate-y-[-50%] text-xl text-primary hover:scale-125 duration-150" />
            </button>

            <input
              type="text"
              className="px-10 py-2 rounded-xl bg-bgTheme text-xl"
            />
          </div>

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

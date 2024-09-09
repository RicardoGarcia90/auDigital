import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

export const Input = ({ styleInput }) => {
  return (
    <div className="inline-block relative">
      <button>
        <FaSearch className="absolute left-2 top-6 transform translate-y-[-50%] text-xl text-primary hover:scale-125 duration-150" />
      </button>

      <input type="text" className={styleInput} />
    </div>
  );
};

Input.propTypes = {
  styleInput: PropTypes.node.isRequired,
};

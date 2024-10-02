import PropTypes from 'prop-types';

export const Button = ({ children, style, onClick }) => {
  return <div className={style} onClick={onClick}>{children}</div>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

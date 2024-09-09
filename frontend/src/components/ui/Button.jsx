import PropTypes from 'prop-types';

export const Button = ({ children, style }) => {
  return <div className={style}>{children}</div>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
};

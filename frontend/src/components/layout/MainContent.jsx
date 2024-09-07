import PropTypes from 'prop-types';

const MainContent = ({ children }) => {
  return <div className="container py-20">{children}</div>;
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;

const CardAuth = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white grid md:grid-cols-1 lg:grid-cols-2">
        {children}
      </div>
    </div>
  );
};

export default CardAuth;

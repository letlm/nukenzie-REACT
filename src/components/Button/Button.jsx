const ButtonComp = ({ children, className, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default ButtonComp;

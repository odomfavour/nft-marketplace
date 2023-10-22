const Breadcrumbs = ({ children }) => {
  return (
    <span
      className=" rounded-2xl px-2 hidden md:inline
    bg-[#858584] bg-opacity-20"
    >
      {children}
    </span>
  );
};

export default Breadcrumbs;

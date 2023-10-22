import Breadcrumbs from "../Breadcrumbs";

const Tabs = () => {
  return (
    <div className=" bg-darkBrown px-10  border-t border-[#3B3B3B]">
      <div className=" text-[#858584] flex   justify-around items-center">
        <div className=" flex items-center gap-1 py-2  cursor-pointer">
          <h5 className=" font-semibold">Created</h5>
          <Breadcrumbs>
            <span className=" text-white text-sm">320</span>
          </Breadcrumbs>
        </div>
        <div className=" flex items-center gap-1 py-2 cursor-pointer">
          <h5 className=" font-semibold">Owned</h5>
          <Breadcrumbs>
            <span className=" text-white text-sm">67</span>
          </Breadcrumbs>
        </div>
        <div className=" flex items-center gap-1 py-2 cursor-pointer">
          <h5 className=" font-semibold">Collections</h5>
          <Breadcrumbs>
            <span className=" text-white text-sm">4</span>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

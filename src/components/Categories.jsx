import { Link } from "react-router-dom";
import {categories} from '../utils/contents.js'

const Categories = () => {
  return (
    <section className="bg-darkBrown  text-white py-[2.5rem] lg:py-[5rem]">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        <h2 className="text-[1.75rem] lg:text-[2.375rem] font-semibold leading-[140%] lg:leading-[120%] font-sans mb-[2.5rem] lg:mb-[3.75rem]">Browse Categories</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-[1.25rem] md:gap-[1.88rem]">
          {categories.map((category) => (
            <Link key={category.id}>
              <div className="">
                <div>
                  <img src={category.img} alt="" className="w-full" />
                </div>
                <div className="p-[1.25rem] lg:px-[1.88rem] pb-[1.56rem] bg-primaryBrown rounded-b-[1.25rem]">
                  <h3 className="font-sans text-base lg:text-[1.375rem] font-semibold leading-[140%]">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

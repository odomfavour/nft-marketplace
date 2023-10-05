import { roadmap } from "../utils/contents";

const HowItWork = () => {
  return (
    <section className="lg:py-[5rem] py-[2.5rem] font-WorkSans">
      <div className="lg:w-10/12 w-11/12 mx-auto">
        <div className="mb-[2.5rem] lg:mb-[3rem]">
          <h2 className="text-[1.75rem] lg:text-[2.375rem] mb-[0.62rem] font-semibold leading-[140%] lg:leading-[120%]">
            How It Works
          </h2>
          <p className="text-base lg:text-[1.375rem] leading-[140%] lg:leading-[160%]">
            Find Out how To Get Started
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:justify-between gap-[1.25rem] md:gap-[1.88rem] lg:gap-[2.2rem]">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className="md:w-1/3 flex justify-between md:justify-center items-center md:flex-col bg-primaryBrown rounded-[1.25rem] p-[1.25rem] lg:px-[1.88rem] md:pb-[1.88rem] md:pt-[0.62rem] gap-3 md:gap:[1.25rem]"
            >
              <img
                src={item.img}
                alt=""
                className="w-1/2 md:w-full lg:h-[15.62rem]"
              />
              <div className="w-1/2 md:w-full md:text-center">
                <h3 className="text-base lg:text-[1.375rem] font-semibold leading-[140%] mb-[0.62rem]">
                  {item.title}
                </h3>
                <p className="text-[0.75rem] lg:text-base leading-[140%]">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;

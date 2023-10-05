import readingAstronaut from "../assets/images/home/reading-astronaut.png";
import envelope from "../assets/images/home/envelope.svg";

const Subscribe = () => {
  return (
    <section className="py-[2.5rem] md:pb-[5rem] font-WorkSans">
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row lg:items-center lg:justify-between md:bg-primaryBrown lg:p-[3.75rem] md:py-[2.5rem] md:px-[1.88rem] lg:gap-[5rem] md:gap-[1.88rem] rounded-[1.25rem]">
        <div className="mb-[1.88rem] lg:mb-[0] md:w-1/2">
          <img
            src={readingAstronaut}
            alt="Astronaut reading"
            className="w-full h-full"
          />
        </div>
        <div className=" md:w-1/2">
          <h2 className="text-[1.75rem] lg:text-[2.375rem] font-semibold leading-[140%] lg:leading-[120%] mb-[0.62rem]">
            Join Our Weekly Digest
          </h2>
          <p className="text-base lg:text-[1.375rem] leading-[140%] lg:leading-[160%] mb-[2.5rem]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <form action="">
            <div className="flex flex-col lg:flex-row lg:gap-0 gap-[1rem] relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email here"
                className="w-full py-[1rem] lg:pr-0 px-[1.25rem] rounded-[1.25rem] text-base text-darkBrown outline-none leading-[140%]"
              />
              <button
                type="submit"
                className="w-full lg:w-[10rem] py-[1rem] px-[1.25rem] rounded-[1.25rem] bg-primaryPurple flex justify-center items-center gap-[0.75rem] text-base leading-[140%] font-sans font-semibold lg:absolute right-[0%]"
              >
                <img src={envelope} alt="Message" />
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

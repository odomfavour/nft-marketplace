import MainLayout from "../components/layout/MainLayout"
import AC from '../assets/images/nft/Asset 12 2.svg'
import globe from '../assets/images/nft/Globe.svg'
import { tagBtns, nft_cards} from "../utils/NFTPageData"
import AuctionTimer from "../components/AuctionTimer"
import NFTCard from "../components/NFTCard"

const Nft = () => {
  return (
    <>
        <MainLayout>
          {/* hero section */}
            <section className="bg-[url('/src/assets/images/nft/nft-hero-mobile.png')] h-[20rem] md:h-[26.25rem] lg:bg-[url('/src/assets/images/nft/nft-hero.png')] bg-no-repeat bg-cover bg-center lg:h-screen">
            </section>

            {/* Full desciption */}
            <section className="py-[2.5rem] bg-[#2B2B2B] ">
              <div className="w-[82%] mx-auto relative">
                <div className=" font-WorkSans  text-white">
                  <h1 className=" font-semibold pb-[0.62rem] text-[1.75rem] md:text-[2.375rem] lg:text-[3.1875rem]">The Orbitians</h1>
                  <p className="text-[1rem] text-[#858584] font-normal lg:text-[1.375rem]">Minted on Sep 30, 2022</p>
                </div>
                <div className="absolute max-[769px]:top-[5.6825rem] max-[761px]:left-0  md:right-0 md:top-0">
                  <AuctionTimer />
                </div>

                <div className=" max-[769px]:pt-[17.12rem]  md:pt-[1.88rem]  ">
                  <h6 className=" text-[1rem] font-normal font-SpaceMono   pb-[0.62rem] text-[#858584] lg:text-[1.375rem ] lg:font-bold">Created By</h6>
                  <div className=" flex items-center"> <img src={AC} alt="" className="mr-[0.75rem] w-[1.5rem] h-[1.5rem]" /> <span className="text-[1rem] font-WorkSans text-white font-normal lg:text-[1.375rem] "> Orbitian</span></div>
                </div>

                <div className=" pt-[1.25rem] md:pt-[1.88rem]  md:w-[22.8125rem] lg:w-[37.8rem]">
                  <h6 className="text-[1rem] font-normal font-SpaceMono  pb-[0.62rem] text-[#858584] lg:text-[1.375rem ] lg:font-bold">Description</h6>

                  <p className="text-white font-WorkSans text-[1rem]  lg:text-[1.375rem ] ">
                  The Orbitians <br />
                  is a collection of 10,000 unique NFTs on the Ethereum blockchain, 
                  <br />
                  <br />
                  There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br />
                  <br />
                  They live in a metal space machines, high up in the sky and only have one foot on Earth.
                  These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                  </p>
                </div>

                <div className="pt-[1.25rem] md:pt-[1.88rem] ">
                  <h6 className="text-[1rem] font-normal font-SpaceMono pb-[0.62rem] text-[#858584] lg:text-[1.375rem ] lg:font-bold ">Details</h6>
                  <div className=" flex items-center"> 
                    <img src={globe} alt="" className="mr-[0.62rem] w-[2rem] h-[2rem]" />
                     <span className="text-[1rem] lg:text-[1.375rem] text-white font-WorkSans  font-normal">View on Etherscan</span>
                  </div>
                  <div className=" flex items-center pt-[0.62rem]"> 
                    <img src={globe} alt="" className="mr-[0.62rem] w-[2rem] h-[2rem]" />
                     <span className="text-[1rem] lg:text-[1.375rem] text-white font-WorkSans  font-normal">View Original</span>
                  </div>
                </div>

                <div className="pt-[1.25rem] md:pt-[1.88rem] w-[19.6875rem] md:w-[22.8125rem]  lg:w-[37.8rem]">
                  <h6 className="text-[1rem] font-normal font-SpaceMono  mb-[1.25rem] text-[#858584] lg:text-[1.375rem ] lg:font-bold">Tags</h6>
                  <div className=" flex items-start flex-col lg:flex-row lg:items-center"> 
                    {tagBtns.map((tagBtn) => {

                   return (
                    <button key={tagBtn} className="text-[1rem] mb-[1.25rem] lg:mr-[1.25rem] lg:mb-0 font-WorkSans text-white font-semibold uppercase py-[0.4rem] px-[1.88rem] bg-[#3B3B3B] rounded-[1.25rem]">{tagBtn}</button>
                   )})}
                  </div>
                </div>
              </div>
             
            </section>



        
            {/* More from the artist */}
            <section className=" pt-[2.5rem] lg:pt-[5rem] h-auto bg-[#2B2B2B]">
              <div className=" w-[84.188%] md:w[81.1676%] lg:w-[82%] mx-auto  relative pb-[2.5rem] lg:pb-0 ">
                <h2 className="text-white  text-[1.75rem] lg:text-[2.375rem] font-WorkSans font-semibold text-left">
                More from this artist
                </h2>
                <button className=" max-[641px]:w-full sm:w-fit absolute  sm:top-0 sm:right-0 px-[3.12rem] rounded-[1.25rem] items-center border-2 border-[#A259FF] flex h-[3.75rem] max-[641px]:bottom-[1.88rem] hover:border-white ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625H3.125C2.77982 10.625 2.5 10.3452 2.5 10Z" fill="#A259FF"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.8081 3.93306C11.0521 3.68898 11.4479 3.68898 11.6919 3.93306L17.3169 9.55806C17.561 9.80214 17.561 10.1979 17.3169 10.4419L11.6919 16.0669C11.4479 16.311 11.0521 16.311 10.8081 16.0669C10.564 15.8229 10.564 15.4271 10.8081 15.1831L15.9911 10L10.8081 4.81694C10.564 4.57286 10.564 4.17714 10.8081 3.93306Z" fill="#A259FF"/>
                  </svg>
                  <span className="pl-[0.75rem] text-white font-semibold text-[1rem]">Go To Artist Page</span>
                </button>

                {/* NFT Cards */}
                <div className="grid max-[641px]:mt-[1.88rem] max-[641px]:pb-[5.63rem] md:pb-[0] mt-[3.75rem] gap-[1.88rem]  sm:gap-y-[3.75rem]  max-[500px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:pb-[5rem]  ">
                    {
                      nft_cards.map(nft_card => {
                        {console.log(nft_card)}
                        return (
                          <div className="h-[29.3125rem]  " key={nft_card.id}>
                              <NFTCard  nft_card={nft_card} />
                          </div>
                        
                        )
                      })
                     }
                </div>
              </div>
            </section>
        </MainLayout>
    </>
  )
}

export default Nft
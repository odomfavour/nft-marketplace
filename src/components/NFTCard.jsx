import AC from '../assets/images/nft/Asset 12 2.svg'

const NFTCard = ({ nft_card }) => {
  return (
    <>

        <div className=" h-fit mb-[1.88rem] sm:mb-0">
          <div className=" w-full">
            <img src={nft_card.src} alt={nft_card.cardName +  " card"} className="object-fill h-[18.4375rem] w-full " />
          </div>

          <div className="  px-[1.88rem] pt-[1.25rem]  h-fit">
            <h5 className=" text-white  capitalize font-WorkSans font-semibold text-[1.375rem]">
            {nft_card.cardName}
            </h5>
            <div className=" flex flex-col">
              <div className=" flex items-center mt-[0.31rem]">
                <img src={AC} alt="" className="mr-[0.75rem] w-[1.5rem] h-[1.5rem]" /> 
                <span className="text-[1rem] font-WorkSans text-white font-normal "> Orbitian</span>
              </div>

              <div className="flex justify-between pt-[1.56rem]">
                <div className=" flex flex-col items-start">
                  <p  className="text-[#858584] text-[0.75rem] font-SpaceMono">Price</p>
                  <h6  className="text-white text-[1rem] pt-[0.5rem]">1.63 ETH</h6>
                </div>
                <div className="flex flex-col items-start">
                  <p  className="text-[#858584] text-[0.75rem] font-SpaceMono">Highest Bid</p>
                  <h6  className="text-white text-[1rem] pt-[0.5rem]">0.33 wETH</h6>
                </div>
              </div>
            </div>
          
            
          </div>

       </div>
    </>
   
  )
}

export default NFTCard
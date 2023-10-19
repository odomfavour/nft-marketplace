import { timer } from "../utils/NFTPageData"

const AuctionTimer = () => {
  return (
    <div className="bg-[#3B3B3B] rounded-[1.25rem] p-[1.88rem] text-white w-[18.4375rem]">
        <p className=" font-SpaceMono text-[0.75rem] pb-[0.62rem]"></p>
        <div className="mb-[1.88rem] flex w-full justify-between">
            {
                timer.map(param => {
                    return (
                        <div key={param.desc} className="flex items-start flex-col">
                            <h3 className="text-[2.375rem] font-bold">{param.count}</h3>
                            <p className="pt-[0.31rem] font-SpaceMono text-[0.75rem]">{param.desc}</p>
                            {/* <span>:</span> */}
                        </div>
                        
                    )
                })
            }
           
        </div>
        <button className="bg-[#A259FF] text-[1rem] font-semibold text-white font-WorkSans rounded-[1.25rem] px-[3.125rem] py-[0.4rem] w-full h-[3.75rem]">Place Bid</button>
    </div>
  )
}

export default AuctionTimer
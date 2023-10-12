import { useEffect, useState } from "react";
// import { date } from "../utils/RankingData";
import RankingCard from "./RankingCard";
import {
  date,
  artistTodayData,
  artistThisWeekData,
  artistThisMonthData,
} from "../utils/RankingData";

const RankingTable = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (idx) => {
    setActiveIndex(idx);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dataItems = isSmallScreen ? ["1d", "7d", "30d", "All Time"] : date;

  console.log(dataItems[activeIndex]);
  const getDataFromActiveTab = () => {
    const currentTab = dataItems[activeIndex];

    if (currentTab === "All Time") return artistThisMonthData;

    if (isSmallScreen) {
      switch (currentTab) {
        case "1d":
          return artistTodayData;
        case "7d":
          return artistThisWeekData;
        case "30d":
          return artistThisMonthData;
        default:
          return [];
      }
    }

    switch (currentTab) {
      case "Today":
        return artistTodayData;

      case "This Week":
        return artistThisWeekData;

      case "This Month":
        return artistThisMonthData;

      default:
        return [];
    }
  };

  return (
    <div className="w-full font-SpaceMono">
      <div className="table-head grid grid-cols-4 col-span-1 place-items-center">
        {dataItems.map((each, idx) => {
          return (
            <div
              key={idx}
              className={`${
                idx === activeIndex
                  ? "border-b-2 border-white border-opacity-60"
                  : "opacity-60"
              } w-full flex justify-center pb-2`}
              onClick={() => handleActiveIndex(idx)}
            >
              {each}
            </div>
          );
        })}
      </div>

      <div className="table-info">
        <RankingCard data={getDataFromActiveTab()} />
      </div>
    </div>
  );
};

export default RankingTable;

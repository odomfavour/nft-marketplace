// import React from "react";
import MainLayout from "../components/layout/MainLayout";
import RankingHeader from "../components/RankingHeader";
import RankingTable from "../components/RankingTable";

const Rankings = () => {
  return (
    <MainLayout>
      <div className="bg-[#2B2B2B] text-white">
        <div className="w-11/12 mx-auto py-5">
          <RankingHeader />
          <RankingTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default Rankings;

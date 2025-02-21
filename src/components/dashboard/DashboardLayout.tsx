import React from "react";
import { Sidebar } from "./Sidebar";
import { InfoCard } from "./InfoCard";
import { HeatMap } from "./HeatMap";
import { RegulationsList } from "./RegulationsList";
import { RisksList } from "./RisksList";
import { ModelsTable } from "./ModelsTable";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-w-80 items-stretch flex-wrap">
      <Sidebar />
      <div className="flex min-w-60 flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%]">
        <div className="bg-[rgba(243,243,243,1)] min-w-[420px] w-full flex-1 py-[5px]">
          <div className="bg-white flex min-h-[55px] w-full items-center gap-[40px_100px] text-sm text-black font-normal leading-none justify-between flex-wrap px-5 py-[5px] border-[rgba(243,243,243,1)] border-b">
            <div className="self-stretch my-auto">Risk Management</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/8679b12fa2d58e16b40359ce254169ef8344a4eb795a4d812c5d7cb131c2a8cd"
              className="aspect-[7.19] object-contain w-[266px] self-stretch min-w-60 shrink-0 my-auto"
              alt="Header decoration"
            />
          </div>
          <div className="bg-white flex min-h-[55px] w-full items-stretch gap-[40px_100px] text-xl text-black font-light whitespace-nowrap text-center tracking-[0.4px] leading-none flex-wrap px-5">
            <div className="self-stretch min-h-[30px] min-w-[50px] h-full w-[150px] rounded-[5px] border-b-[6px] border-[rgba(15,17,42,1)]">
              Validation
            </div>
            <div className="self-stretch min-h-[30px] min-w-[50px] h-full w-[150px] rounded-[5px]">
              Production
            </div>
          </div>
          <div className="w-full px-5 py-2.5">
            <div className="flex w-full gap-[10px_91px] justify-between flex-wrap">
              <InfoCard
                title="Total Models"
                value={23}
                label="Label"
                description="vs. last period"
                accentColor="rgba(0,201,181,1)"
                icon="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/ffe4eee1a5a2913d0e44f626cf53623d2d685e22043873498ae61d010120ad19"
              />
              <InfoCard
                title="Risk Score"
                value={15}
                label="Label"
                description="vs. last period"
                accentColor="rgba(237,0,0,1)"
                icon="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/d9b00518863cbb40d62a14eae5a6c15c572381d420416451ad936c4dddc8e9c5"
              />
              <InfoCard
                title="Drift Score"
                value={8}
                label="Label"
                description="vs. last period"
                accentColor="rgba(61,204,255,1)"
                icon="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/5b24cc2de24a5eeff0f06a5bc4bd474d137bc319ccce5246509aaa53e680b684"
              />
              <InfoCard
                title="Number of Alerts"
                value={221}
                label="Label"
                description="vs. last period"
                accentColor="rgba(237,0,0,1)"
                icon="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/ffe4eee1a5a2913d0e44f626cf53623d2d685e22043873498ae61d010120ad19"
              />
            </div>
            <div className="flex w-full gap-[10px_25px] flex-wrap mt-[25px]">
              <HeatMap />
              <RegulationsList />
              <RisksList />
            </div>
          </div>
          <ModelsTable />
        </div>
      </div>
    </div>
  );
};

import React from "react";

const risks = [
  {
    id: 1,
    model: "FEATURE BIAS",
    category: "ROBUSTNESS",
    subcategory: "FEATURE BIAS",
    threshold: "[Value defined as threshold]",
  },
  {
    id: 2,
    model: "FEATURE BIAS",
    category: "ROBUSTNESS",
    subcategory: "FEATURE BIAS",
    threshold: "[Value defined as threshold]",
  },
  {
    id: 3,
    model: "FEATURE BIAS",
    category: "ROBUSTNESS",
    subcategory: "FEATURE BIAS",
    threshold: "[Value defined as threshold]",
  },
  {
    id: 4,
    model: "FEATURE BIAS",
    category: "ROBUSTNESS",
    subcategory: "FEATURE BIAS",
    threshold: "[Value defined as threshold]",
  },
];

export const RisksList: React.FC = () => {
  return (
    <div className="bg-white flex min-h-[315px] min-w-[400px] items-stretch overflow-hidden flex-1 shrink basis-[0%] rounded-[10px]">
      <div className="flex min-w-60 w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%]">
        <div className="flex min-h-[50px] w-full items-stretch justify-between px-[15px] border-[rgba(231,232,242,1)] border-b">
          <div className="text-black text-xl font-medium leading-none tracking-[0.4px] my-auto">
            Top Risks
          </div>
          <div className="flex items-center gap-2.5 h-full w-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/3a9da814384ea4d5ea78a38ce16f1afa80a0287fe2cb8852ad6771cde4060f0c"
              className="aspect-[1] object-contain w-5 stroke-[1px] stroke-[#0F112A] self-stretch my-auto"
              alt="Settings"
            />
          </div>
        </div>
        <div className="min-h-[230px] w-full overflow-hidden flex-1">
          {risks.map((risk) => (
            <div
              key={risk.id}
              className="flex w-full items-stretch gap-2.5 overflow-hidden flex-wrap px-2.5 border-[rgba(243,243,243,1)] border-b"
            >
              <div className="flex min-h-[60px] items-center gap-3 w-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/387ca9448520c63fed862cefda7d85e1a004d6699b03f86a30fffd91362ba9e8"
                  className="aspect-[1] object-contain w-4 self-stretch my-auto"
                  alt="Risk icon"
                />
              </div>
              <div className="flex min-w-60 flex-col overflow-hidden items-stretch font-normal leading-none justify-center flex-1 shrink basis-[0%] p-2.5">
                <div className="text-black text-base tracking-[0.32px]">
                  <span className="font-medium text-[rgba(17,40,58,1)]">
                    model:{" "}
                  </span>
                  <span className="font-medium text-[rgba(92,94,98,1)]">
                    {risk.model} /{" "}
                  </span>
                  <span className="font-medium text-[rgba(17,40,58,1)]">
                    {risk.category}:{" "}
                  </span>
                  <span className="font-medium text-[rgba(92,94,98,1)]">
                    {risk.subcategory}
                  </span>
                </div>
                <div className="text-[#010101] text-sm tracking-[0.28px] mt-2.5">
                  Alert threshold: {risk.threshold}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

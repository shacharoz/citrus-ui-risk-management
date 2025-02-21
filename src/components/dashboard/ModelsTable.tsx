import React from "react";

const models = [
  {
    id: 1,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
  {
    id: 2,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
  {
    id: 3,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
  {
    id: 4,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
  {
    id: 5,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
  {
    id: 6,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
  {
    id: 7,
    name: "model",
    lastModified: "27 Jun 2022",
    alerts: 4,
    riskScore: 0.675,
  },
];

export const ModelsTable: React.FC = () => {
  return (
    <div className="w-full text-base text-black font-normal leading-none px-5 py-2.5">
      <div className="justify-between items-center border-b-[color:var(--text-colors-gray-text-widget-button,#CACBCD)] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.20)] bg-[#FAFBFD] flex min-h-[50px] w-full gap-[40px_100px] text-xl font-medium flex-wrap px-2.5 rounded-[6px_6px_0px_0px] border-b border-solid">
        <div className="self-stretch flex min-w-[200px] items-stretch gap-[40px_50px] justify-between h-full w-[200px]">
          <div className="my-auto">Model name</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/dcfa25661e0ed25516191b0cd240dacb9de4ad3020630b250de9881c27a7e2ee"
            className="aspect-[0.4] object-contain w-5 shrink-0"
            alt="Sort"
          />
        </div>
        <div className="self-stretch flex min-w-[200px] min-h-[50px] items-stretch gap-[40px_47px] justify-between w-[200px] my-auto">
          <div className="my-auto">Last Modified</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/bfb58cb01b4863fed562d2eca7bbded1acfc20042efd137ea637e9dd9e9cdd54"
            className="aspect-[0.4] object-contain w-5 shrink-0"
            alt="Sort"
          />
        </div>
        <div className="self-stretch flex min-w-[200px] min-h-[50px] items-stretch gap-[40px_100px] whitespace-nowrap justify-between w-[200px] my-auto">
          <div className="my-auto">Alerts</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/70ead08f35f36537b2f1e575315af165f582d3164a777a42cdc96b93bcf9a08e"
            className="aspect-[0.4] object-contain w-5 shrink-0"
            alt="Sort"
          />
        </div>
        <div className="self-stretch flex min-w-[200px] min-h-[50px] items-stretch gap-[40px_76px] justify-between w-[200px] my-auto">
          <div className="my-auto">Risk Score</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/dcfa25661e0ed25516191b0cd240dacb9de4ad3020630b250de9881c27a7e2ee"
            className="aspect-[0.4] object-contain w-5 shrink-0"
            alt="Sort"
          />
        </div>
      </div>
      {models.map((model) => (
        <div
          key={model.id}
          className="min-w-[420px] justify-between items-center border-b-[color:var(--text-colors-gray-text-widget-button,#CACBCD)] bg-white flex min-h-[50px] w-full gap-[40px_100px] flex-wrap px-2.5 border-b border-solid"
        >
          <div className="self-stretch w-[200px] my-auto">{model.name}</div>
          <div className="self-stretch w-[200px] my-auto">
            {model.lastModified}
          </div>
          <div className="self-stretch flex items-center gap-[11px] font-medium whitespace-nowrap leading-[60px] h-full w-[200px] p-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/a700b4b054d407df0ff8ae7e45b8c08b8bb2fac09595db6efb99cb07d3e30238"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt="Alert icon"
            />
            <div className="self-stretch my-auto">{model.alerts}</div>
          </div>
          <div className="self-stretch w-[200px] my-auto">
            {model.riskScore}
          </div>
        </div>
      ))}
    </div>
  );
};

import React from "react";

const regulations = [
  { id: 1, name: "EU AI ACT", models: "2/34" },
  { id: 2, name: "EU AI ACT", models: "2/34" },
  { id: 3, name: "EU AI ACT", models: "2/34" },
  { id: 4, name: "EU AI ACT", models: "2/34" },
];

export const RegulationsList: React.FC = () => {
  return (
    <div className="bg-white flex min-h-[315px] min-w-[400px] items-stretch overflow-hidden flex-1 shrink basis-[0%] rounded-[10px]">
      <div className="flex min-w-60 w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%]">
        <div className="flex min-h-[50px] w-full items-stretch justify-between px-[15px] border-[rgba(231,232,242,1)] border-b">
          <div className="text-black text-xl font-medium leading-none tracking-[0.4px] my-auto">
            Regulations
          </div>
          <div className="flex items-center gap-2.5 h-full w-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/15aed36bad81567dabc484c4d743eff8156651780d1463484e1b7012b5fdaf6d"
              className="aspect-[1] object-contain w-5 stroke-[1px] stroke-[#0F112A] self-stretch my-auto"
              alt="Settings"
            />
          </div>
        </div>
        <div className="min-h-[230px] w-full overflow-hidden flex-1">
          {regulations.map((regulation) => (
            <div
              key={regulation.id}
              className="flex min-h-[60px] w-full items-center gap-2 overflow-hidden flex-wrap px-2.5 border-[rgba(243,243,243,1)] border-b"
            >
              <div className="text-black text-base font-medium leading-none tracking-[0.32px] self-stretch my-auto">
                {regulation.id}.
              </div>
              <div className="self-stretch flex items-center justify-center w-9 my-auto">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/b247424d4ce55e20d0d917df87cd3860c8c0b8dfa2432e4f423f26f04357656b"
                  className="aspect-[1] object-contain w-9 self-stretch my-auto rounded-[84px]"
                  alt="Regulation icon"
                />
              </div>
              <div className="text-black text-base font-medium leading-none tracking-[0.32px] self-stretch my-auto">
                {regulation.name}
              </div>
              <div className="self-stretch flex min-w-60 w-[291px] shrink h-[60px] gap-2.5 flex-1 basis-[0%] py-2.5" />
              <div className="text-black text-base font-medium leading-none self-stretch my-auto">
                {regulation.models} Models
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

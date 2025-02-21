import React from "react";

interface InfoCardProps {
  title: string;
  value: string | number;
  label: string;
  description: string;
  accentColor: string;
  icon?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  label,
  description,
  accentColor,
  icon,
}) => {
  return (
    <div className="bg-white flex min-h-[150px] min-w-[375px] items-stretch overflow-hidden rounded-[10px]">
      <div
        className="flex w-2.5 shrink-0 h-[150px] py-2.5"
        style={{ backgroundColor: accentColor }}
      />
      <div className="flex min-w-60 w-[365px] flex-col overflow-hidden items-stretch justify-center">
        <div className="flex min-h-[50px] w-full items-stretch justify-between px-[15px] border-[rgba(231,232,242,1)] border-b">
          <div className="text-black text-xl font-medium leading-none tracking-[0.4px] my-auto">
            {title}
          </div>
          {icon && (
            <div className="flex items-center gap-2.5 h-full w-5">
              <img
                loading="lazy"
                src={icon}
                className="aspect-[1] object-contain w-5 stroke-[1px] stroke-[#0F112A] self-stretch my-auto"
              />
            </div>
          )}
        </div>
        <div className="flex w-full items-center gap-[9px] text-sm text-black leading-none flex-1 h-full px-[15px]">
          <div className="text-5xl font-bold self-stretch my-auto max-md:text-[40px]">
            {value}
          </div>
          <div className="justify-center items-center rounded bg-[#F1FAF3] self-stretch flex gap-1.5 overflow-hidden text-[#000101] font-medium whitespace-nowrap my-auto px-2 py-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/9b607883fdcb675f93cbd82493263151ae289e374ffafcc2cec65083ae9c1adc"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <div className="self-stretch my-auto">{label}</div>
          </div>
          <div className="font-normal self-stretch my-auto">{description}</div>
        </div>
      </div>
    </div>
  );
};

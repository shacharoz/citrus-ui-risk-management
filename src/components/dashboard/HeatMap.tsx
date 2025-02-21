import React from "react";

export const HeatMap: React.FC = () => {
  return (
    <div className="bg-white flex min-h-[315px] min-w-[400px] items-stretch overflow-hidden flex-1 shrink basis-[0%] rounded-[10px]">
      <div className="flex min-w-60 w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%]">
        <div className="flex min-h-[50px] w-full items-stretch justify-between px-[15px] border-[rgba(231,232,242,1)] border-b">
          <div className="text-black text-xl font-medium leading-none tracking-[0.4px] my-auto">
            Heat Map
          </div>
          <div className="flex items-center gap-2.5 h-full w-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/df1c98a96ab8916457e68ce74457403aa6bd5078d31b0223593dd488c79a2f5d"
              className="aspect-[1] object-contain w-5 stroke-[1px] stroke-[#0F112A] self-stretch my-auto"
              alt="Settings"
            />
          </div>
        </div>
        <div className="rotate-[-1.5070410197548512e-16rad] flex min-h-[270px] w-full items-center leading-none justify-center">
          <div className="rotate-[-1.5070410197548512e-16rad] self-stretch min-w-60 min-h-[270px] w-[331px] overflow-hidden my-auto">
            <div className="flex w-full items-stretch whitespace-nowrap flex-1 h-full">
              <div className="flex flex-col items-center text-[9px] text-[#010101] font-medium text-right tracking-[0.18px] justify-center">
                <div className="rotate-[2.6718908186452923e-24rad] text-black text-center">
                  impact
                </div>
                <div className="rotate-[-1.5070410197548512e-16rad] mt-[50px] max-md:mt-10">
                  Critical
                </div>
                <div className="rotate-[-1.5070410197548512e-16rad] mt-[50px] max-md:mt-10">
                  Critical
                </div>
                <div className="rotate-[-1.5070410197548512e-16rad] mt-[50px] max-md:mt-10">
                  normal
                </div>
              </div>
              <div className="flex min-w-[235px] flex-col items-center text-xs text-black font-semibold text-center tracking-[0.24px] justify-between">
                {[...Array(3)].map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="rotate-[-1.5070410197548512e-16rad] flex items-center gap-2.5 flex-1 h-full"
                  >
                    {[3, 12, 15].map((value, colIndex) => (
                      <div
                        key={colIndex}
                        className={`${
                          value === 3
                            ? "bg-[rgba(255,166,0,1)]"
                            : "bg-[rgba(238,68,47,1)]"
                        } self-stretch min-h-[60px] w-[60px] h-[60px] my-auto rounded-sm flex items-center justify-center`}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="rotate-[-1.5070410197548512e-16rad] flex min-h-5 w-full items-center gap-[40px_41px] text-[9px] text-[#010101] font-medium text-right tracking-[0.18px] px-[5px]">
              <div className="rotate-[-1.5070410197548512e-16rad] text-black self-stretch my-auto">
                likelihood
              </div>
              <div className="rotate-[-7.928025892486298e-17rad] text-center self-stretch my-auto">
                improbable
              </div>
              <div className="rotate-[-7.928025892486298e-17rad] text-center self-stretch my-auto">
                occasional
              </div>
              <div className="rotate-[-7.928025892486298e-17rad] self-stretch my-auto">
                frequent
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

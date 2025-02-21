import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <div className="bg-[rgba(15,17,42,1)] overflow-hidden w-[100px] max-md:hidden">
      <div className="flex w-full flex-col items-center py-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/09f967b23b7fb76bd96d351ec11c4edacf2277b87428aedd16374b8923b4a2f7"
          className="aspect-[0.79] object-contain w-[70px] stroke-[1px] stroke-[#CACBCD]"
          alt="Logo"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/b2a6c097a2a568a012704dbef073d602a34d483e5d296f9221ddcc8a0900518f"
          className="aspect-[1.76] object-contain w-[72px] mt-10"
          alt="Navigation item 1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/e9b7df0a85ff2a82451827ccb67de4f935d592a105aa7109fbd12474b14b8329"
          className="aspect-[1.12] object-contain w-[53px] mt-10"
          alt="Navigation item 2"
        />
        <div className="flex w-[60px] flex-col items-center mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/c683c273d128f0b6621d7756e6c2d1a5af83d813e66f2f392f6465c92d96e3ca"
            className="aspect-[0.96] object-contain w-[27px] stroke-[1px] stroke-white"
            alt="Navigation item 3"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/521c5cb8fafdc52e4918a6b301436df2ab5cdb04cb80d6e6085e083966787ce0"
            className="aspect-[3.75] object-contain w-full mt-2"
            alt="Navigation item 4"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-[414px] py-[21px] max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/1f7e2ba217101ffd5321ff4aadf86cd50c6391e29a8d0faf8467f6526a116c21"
          className="aspect-[1] object-contain w-[27px] stroke-[1px] stroke-white"
          alt="Bottom navigation 1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/fdfc6cbe4959499bacfbd8f015c1a2c62c3af931eb46f3d7aecb35fff6466274"
          className="aspect-[1.08] object-contain w-[27px] stroke-[1px] stroke-white mt-[41px] max-md:mt-10"
          alt="Bottom navigation 2"
        />
        <div className="border bg-[#CACBCD] min-h-px w-[70px] mt-[41px] border-[rgba(202,203,205,1)] border-solid max-md:mt-10" />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/c68873a7867642eca25bdaf9acf3903b/8ea8a0dc6717b4f01ae8507f8f314912b49f01b812598fda10c5c8cbfdaff8a9"
          className="aspect-[1.03] object-contain w-16 mt-[41px] max-md:mt-10"
          alt="Profile"
        />
      </div>
    </div>
  );
};

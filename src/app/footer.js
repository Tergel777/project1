export const Footer = () => {
  return (
    <div className="w-[1440px] h-[220px] border border-solid border-[#E4E4E7] flex justify-between justify-self-center">
      <div className="font-sans font-medium text-[14px] text-[#71717A] pt-[48px]">
        2025 E-commerce. All rights reserved.
      </div>
      <div className="w-[422px] h-[92px] gap-[80px] flex pt-[48px]">
        <div className="w-[78px] h-[92px] flex flex-col gap-[16px]">
          <div className="font-sans font-medium text-[12px] text-[#71717A]">
            Information
          </div>
          <div className="font-sans font-medium text-[14px] text-black">
            help center
          </div>
          <div className="font-sans font-medium text-[14px] text-black">
            for brands
          </div>
        </div>
        <div className="w-[71px] h-[92px] flex flex-col gap-[16px]">
          <div className="font-sans font-medium text-[12px] text-[#71717A]">
            social
          </div>
          <div className="font-sans font-medium text-[14px] text-black">
            X (twitter)
          </div>
          <div className="font-sans font-medium text-[14px] text-black">
            instagram
          </div>
        </div>
        <div className="w-[113px] h-[92px] flex flex-col gap-[16px]">
          <div className="font-sans font-medium text-[12px] text-[#71717A]">
            legal
          </div>
          <div className="font-sans font-medium text-[14px] text-black">
            terms of service
          </div>
          <div className="font-sans font-medium text-[14px] text-black">
            privacy policy
          </div>
        </div>
      </div>
    </div>
  );
};

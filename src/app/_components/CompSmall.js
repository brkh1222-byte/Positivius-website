export const SmallComp = () => {
  return (
    <div className="px-25 py-[23.5px] w-[1440px] h-[394px] mt-25">
      <div className=" w-[1240px] h-[347px] bg-[#F3F3F3] rounded-[30px] flex items-center justify-between">
        <div className="w-[500px] h-[227px] flex flex-col justify-between pl-15">
          <h1 className="text-[30px] font-bold">Let's make things happen</h1>
          <p className="text-[18px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="w-[288px] h-[68px] bg-[#191A23] rounded-[15px] flex justify-center items-center text-white">
            Get your free proposal
          </button>
        </div>
        <div className="w-[494px] h-[394px] pr-[135px]">
          <img src="/hickey.png" />
        </div>
      </div>
    </div>
  );
};

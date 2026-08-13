export const Feedback = () => {
  return (
    <div className="w-[1440px] h-[773px] flex justify-center mt-20">
      <div className="w-[1240px] h-[773px] bg-[#F3F3F3] rounded-[45px] flex items-center relative">
        <div className="w-[556px] h-[633px] absolute left-25 flex flex-col gap-[25px] justify-between items-start">
          <div className="w-[276px] h-[28px] flex justify-between">
            <div className="flex items-center gap-[14px]">
              <img src="/Radiobutton.png" />
              <p>Say Hi</p>
            </div>
            <div className="flex items-center gap-[14px]">
              <img src="/circle.png" />
              <p>Get a Quote</p>
            </div>
          </div>
          <div className="w-[556px] h-[457px] flex flex-col gap-[25px]">
            <div className="w-[556px] flex flex-col gap-[5px]">
              <p className="text-4">Name</p>
              <div className="border border-black-300 rounded-[14px] bg-white h-[59px] flex items-center pl-[30px]">
                <input type="text" placeholder="Name"></input>
              </div>
            </div>
            <div className="w-[556px] flex flex-col gap-[5px]">
              <p className="text-4">Email*</p>
              <div className="border border-black-300 rounded-[14px] bg-white h-[59px] flex items-center pl-[30px]">
                <input type="text" placeholder="Email"></input>
              </div>
            </div>
            <div className="w-[556px] flex flex-col gap-[5px]">
              <p className="text-4">Message*</p>
              <div className="border border-black-300 rounded-[14px] bg-white h-[190px] pt-[18px] pl-[30px]">
                <input type="text" placeholder="Message"></input>
              </div>
            </div>
          </div>
          <div className="w-[556px] h-[68px] rounded-[14px] bg-[#191A23] text-white text-[20px] flex justify-center items-center">
            Send Message
          </div>
        </div>
        <div className="absolute right-[-326px]">
          <img src="/stylistic.png" />
        </div>
      </div>
    </div>
  );
};

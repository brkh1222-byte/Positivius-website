const para = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export const Contact = () => {
  return (
    <div className="w-[1440px] h-[514px] mt-[140px] flex justify-center">
      <div className="w-[1240px] h-[514px] bg-[#191A23] rounded-t-[45px] flex flex-col items-center justify-evenly">
        <div className="w-[1120px] h-[281px] border flex flex-col justify-between">
          <div className="w-[1120px] h-[30px] flex justify-between">
            <div>
              <img src="/positivius.png" />
            </div>
            <div className="w-[501px] flex justify-between">
              {para.map((item) => {
                return (
                  <div
                    key={item}
                    className="text-white underline text-[18px]-400"
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5">
              <img src="/Social icon.png" />
              <img src="/Social icon (1).png" />
              <img src="/Social icon (2).png" />
            </div>
          </div>
          <div className="w-[1120px] h-[185px] border flex justify-between">
            <div className="w-[332px] h-[185px] flex flex-col justify-between">
              <div className="w-[126px] h-[26px] rounded-[7px] bg-[#B9FF66] text-[#000000] text-[20px]-500 flex justify-center items-center">
                Contact us:
              </div>
              <div className="w-[332px] h-[132px] flex flex-col justify-between items-start">
                <p className="text-[18px]-400 text-white">
                  Email: info@positivus.com
                </p>
                <p className="text-[18px]-400 text-white">
                  Phone: 555-567-8901
                </p>
                <p className="text-[18px]-400 text-white">
                  Address: 1234 Main St
                  <br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>
            <div className="w-[634px] h-[185px] bg-[#292A32] rounded-2xl flex justify-center gap-5 items-center">
              <div className="w-[285px] h-[68px] border border-white-500 rounded-2xl text-white flex pl-[35px] items-center  text-[18px]">
                Email
              </div>
              <div className="w-[249px] h-[68px] bg-[#B9FF66] text-black rounded-2xl flex justify-center items-center text-[18px]">
                Subscribe to news
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1120px] h-[78px] flex flex-col justify-between items-start">
          <div className="w-[1120px] h-[1px] bg-white"></div>
          <div className="w-[485px] h-[28px] flex gap-10">
            <div className="text-white">
              © 2023 Positivus. All Rights Reserved.
            </div>
            <div className="text-white">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

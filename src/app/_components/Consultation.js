const data = [
  {
    id: "02",
    text: "Research and Strategy Development",
  },
  {
    id: "03",
    text: "Implementation",
  },
  {
    id: "04",
    text: "Monitoring and Optimization",
  },
  {
    id: "05",
    text: "Reporting and Communication",
  },
  {
    id: "06",
    text: "Continual Improvement",
  },
];

export const Consultation = () => {
  return (
    <div className="mt-20 w-[1434px]px-25 flex flex-col gap-[30px] ">
      <div className="w-[1234px] h-[279px] border border-black-300 rounded-[45px] bg-[#B9FF66] border-b-6 flex flex-col justify-center items-center gap-[30px]">
        <div className="w-[1117px] h-[77px] flex justify-between">
          <div className="w-[712px] h-[77px] flex items-center gap-[25px]">
            <h1 className="text-[60px]">01</h1>
            <h2 className="text-[30px]">Consultation</h2>
          </div>
          <div className="w-[58px] h-[58px]">
            <img src="/minus.png" />
          </div>
        </div>
        <div className="w-[1117px] h-[1px] bg-black"></div>
        <div className="w-[1117px] h-[60px]">
          <p className="text-[18px]">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </div>
      </div>

      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[1234px] h-[159px] bg-[#F3F3F3] rounded-[45px] border border-black-300 px-15 gap-[347px] flex items-center border-b-6"
          >
            <div className="w-[712px] h-[77px] flex items-center gap-[25px]">
              <h1 className="text-[60px]">{item.id}</h1>
              <h2 className="text-[30px]">{item.text}</h2>
            </div>
            <div className="w-[58px] h-[58px]">
              <img src="/plus.png" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

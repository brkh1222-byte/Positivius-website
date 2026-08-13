const data = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    img: "/john.png",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    img: "/jane.png",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    img: "/michael.png",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    img: "/emily.png",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    img: "/brian.png",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    img: "/sarah.png",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

export const Experts = () => {
  return (
    <div className="w-[1441px] h-[700px] gap-10 flex justify-center flex-wrap mt-20">
      {data.map((item) => {
        return (
          <div
            key={item.name}
            className="rounded-[45px] border border-black-300 w-[387px] h-[331px] border-b-6 px-[35px] pt-[40px] flex flex-col gap-[28px]"
          >
            <div className="flex w-[317px] h-[102.82px] relative justify-between">
              <div className="w-[105.65px] h-[102.82px]">
                <img src={item.img} />
              </div>
              <div className=" h-[49px] absolute bottom-0 left-[125.65px] flex flex-col">
                <h2 className="text-[20px] font-bold">{item.name}</h2>
                <p className="text-[18px]">{item.role}</p>
              </div>
              <div className="w-[34px] h-[34px] absolute top-0 right-0">
                <img src="/linkedin.png" />
              </div>
            </div>
            <div className="w-[317px] h-[1px] bg-black"></div>
            <div className="w-[317px] text-[18px] leading-[130%]">
              {item.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

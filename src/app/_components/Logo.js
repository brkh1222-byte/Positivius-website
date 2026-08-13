const navs = [
  "/amazon.png",
  "/dribbble.png",
  "/hubspot.png",
  "/notion.png",
  "/netflix.png",
  "/zoom.png",
];

export const Logo = () => {
  return (
    <div className=" px-25 w-[1440px] flex justify-between mt-[70px]">
      {navs.map((item) => {
        return (
          <div key={item}>
            <img src={item} />
          </div>
        );
      })}
    </div>
  );
};

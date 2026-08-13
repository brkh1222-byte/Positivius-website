const navs = [
  "About Us",
  "Services",
  "Use Cases",
  "Pricing",
  "Blog",
  "Request a quote",
];

export const Header = () => {
  return (
    <div className="px-25 h-17 flex justify-between items-center mt-15 mb-15 w-[1440px] h-[68px]">
      <img src="/logo.png" />
      <div className="flex items-center gap-10">
        {navs.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
};

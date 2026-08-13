import {
  Header,
  Hero,
  Logo,
  Services,
  Cards,
  SmallComp,
  Small,
  Small2,
  BlackCard,
  Small3,
  Small4,
  Small5,
  Consultation,
  Experts,
  Button,
  Testimonials,
  Feedback,
  Contact,
} from "./_components/index";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Logo />
      <Services />
      <Cards />
      <SmallComp />
      <Small />
      <BlackCard />
      <Small2 />
      <Consultation />
      <Small3 />
      <Experts />
      <Button />
      <Small4 />
      <Testimonials />
      <Small5 />
      <Feedback />
      <Contact />
    </div>
  );
};

export default Home;

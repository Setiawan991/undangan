import HomePage from "@/src/components/HomePage";
import Info from "@/src/components/Info";
import Content from "@/src/components/Content";
import Opening from "@/src/components/Opening";
import WeddingEvent from "@/src/components/WeddingEvent";
import Give from "@/src/components/Give";
import Galery from "../components/Galery";

const Home = () => {
  return (
    <div className="min-h-screen relative ">
      <div className="absolute w-full z-10">
        <Opening />
      </div>

      <div className="relative" id="homepage">
        <HomePage />
      </div>
      <div id="content">
        <Info />
      </div>
      <Content />
      <WeddingEvent />
      <Galery />
      <Give />
    </div>
  );
};

export default Home;

import Herotwo from "./Components/home/hero";
import Whatwedo from "./Components/home/whatwedo";
import InfiniteLogoSlider from "./Components/home/InfiniteLogoSlider";
import QandA from "./Components/home/qanda";

export default async function Page() {
  return (
    <>
      <div className="pt-[80px] pb-[60px]">
        <Herotwo />
        <InfiniteLogoSlider />
        <Whatwedo />
        <QandA />
      </div>
    </>
  );
}

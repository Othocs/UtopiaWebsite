import Herotwo from "./Components/herotwo";
import Whatwedo from "./Components/whatwedo";
import InfiniteLogoSlider from "./Components/widgets/InfiniteLogoSlider";

export default async function Page() {
  return (
    <>
      <div className="pt-[80px] pb-[60px]">
        <Herotwo />
        <InfiniteLogoSlider />
        <Whatwedo />
      </div>
    </>
  );
}

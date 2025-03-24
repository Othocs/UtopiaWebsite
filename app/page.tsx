import Herotwo from "./Components/home/hero";
import Whatwedo from "./Components/home/whatwedo";
import InfiniteLogoSlider from "./Components/home/InfiniteLogoSlider";
import QandA from "./Components/home/qanda";
import ContactSection from "./Components/widgets/ContactSection";

export default async function Page() {
  return (
    <>
      <div className="pt-[80px] pb-0">
        <Herotwo />
        <InfiniteLogoSlider />
        <Whatwedo />
        <QandA />

        <ContactSection />
      </div>
    </>
  );
}

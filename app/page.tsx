import Companies from "./Components/companies";
import Herotwo from "./Components/herotwo";
import Whatwedo from "./Components/whatwedo";

export default async function Page() {
  return (
    <>
      <div className="pt-[80px] pb-[60px]">
        <Herotwo />

        <Companies />
        <Whatwedo />
      </div>
    </>
  );
}

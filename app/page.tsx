import Companies from "./Components/companies";
import Herotwo from "./Components/herotwo";
import Navbar from "./Components/navbar";
import Whatwedo from "./Components/whatwedo";

export default async function Page() {
  return (
    <>
      <Navbar />
      <div className="pt-[80px]">
        <Herotwo />
        <Companies />
        <Whatwedo />
      </div>
    </>
  );
}

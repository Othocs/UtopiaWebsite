import { Fade } from "react-awesome-reveal";
import Countdowncomp from "./countdown";

export default async function EventsPage() {
  return (
    <>
      <div className="h-screen text-[#380f43] text-7xl flex flex-col items-center justify-center text-center gap-y-9">
        <Fade cascade triggerOnce>
          <p> Next Event In </p>
          <Countdowncomp />
        </Fade>
      </div>
    </>
  );
}

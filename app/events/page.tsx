import { Fade } from "react-awesome-reveal";
import Countdowncomp from "./countdown";
import PastEvents from "./pastevents";
import ScrollDownIndicator from "./scrolldownindicator";

export default async function EventsPage() {
  return (
    <>
      {/* Next Event Countdown Section */}
      <div className="h-screen text-[#380f43] text-7xl flex flex-col items-center justify-center text-center gap-y-9 relative">
        <Fade cascade triggerOnce>
          <p> Next Event In </p>
          <Countdowncomp />
        </Fade>

        {/* Scroll Indicator */}
        <ScrollDownIndicator />
      </div>

      {/* Past Events Gallery Section */}
      <PastEvents />
    </>
  );
}

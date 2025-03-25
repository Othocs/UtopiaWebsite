import { Fade } from "react-awesome-reveal";
import Countdowncomp from "./countdown";
import PastEvents from "./pastevents";
import ScrollDownIndicator from "./scrolldownindicator";
import ContactSection from "../Components/widgets/ContactSection";
import LumaCheckout from "./luma";

export default async function EventsPage() {
  return (
    <>
      {/* Next Event Countdown Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center gap-y-7 relative">
        <Fade
          cascade
          triggerOnce
          className="text-[#380f43] md:text-7xl text-5xl"
        >
          <p> Next Event In </p>
          <Countdowncomp />

          {/* Adding the registration button below the countdown */}
          <div className="">
            <LumaCheckout
              eventId="evt-5p3EajImDt6e6jC"
              buttonText="Register Now"
            />
          </div>
        </Fade>

        {/* Scroll Indicator */}

        <ScrollDownIndicator />
      </div>

      {/* Past Events Gallery Section */}
      <PastEvents />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

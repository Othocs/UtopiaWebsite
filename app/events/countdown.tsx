"use client";
import React from "react";
import Countdown from "react-countdown";

// Define the type for the renderer props
interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

// Create a renderer to provide a consistent initial state
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: RendererProps) => {
  if (completed) {
    return <span>Event has started!</span>;
  } else {
    // Format with leading zeros to ensure consistent length
    return (
      <span className="text-5xl font-semibold">
        {days}d {hours}h {minutes}m {seconds}s
      </span>
    );
  }
};

const Countdowncomp = () => {
  // This ensures React will throw away the server render and re-render on client
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Show a static placeholder during server-side rendering
  if (!isClient) {
    return <span className="text-5xl font-semibold">Loading countdown...</span>;
  }

  return <Countdown date={"2025-04-04T19:00:00"} renderer={renderer} />;
};

export default Countdowncomp;

"use client";
import React, { useEffect } from "react";

interface LumaCheckoutProps {
  eventId: string;
  buttonText?: string;
  className?: string;
}

const LumaCheckout: React.FC<LumaCheckoutProps> = ({
  eventId,
  buttonText = "Inscrivez-vous à l'événement",
  className,
}) => {
  useEffect(() => {
    // Load the Luma script when component mounts
    const script = document.createElement("script");
    script.id = "luma-checkout";
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("luma-checkout");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Default classes combined with any passed-in class
  const buttonClass = ` inline-block py-1 px-3 text-lg rounded-lg font-medium transition-all duration-300 
    bg-[#380f43] hover:bg-[#4a1a58] text-white shadow-md hover:shadow-lg 
    transform hover:-translate-y-1 hover:scale-105 ${className || ""}`;

  return (
    <a
      href={`https://lu.ma/event/${eventId}`}
      className={buttonClass}
      data-luma-action="checkout"
      data-luma-event-id={eventId}
    >
      {buttonText}
    </a>
  );
};

export default LumaCheckout;

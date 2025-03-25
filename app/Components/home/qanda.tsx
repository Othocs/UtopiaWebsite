"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Fade } from "react-awesome-reveal";

const QandA = () => {
  return (
    <Fade triggerOnce>
      <div className="w-[80%] mx-auto mt-20">
        {/* Container with fixed height to prevent layout shifts */}
        <div className="w-[80%] mx-auto text-center mb-5">
          <Fade triggerOnce>
            <p className="md:text-3xl text-2xl font-semibold ">
              Frequent Questions
            </p>
          </Fade>
        </div>
        <div className="min-h-[275px] w-full mx-auto flex items-start justify-center">
          <Accordion
            type="single"
            collapsible
            className="w-[600px] rounded-xl bg-white/30 backdrop-blur-sm shadow-lg border border-purple-200/30"
          >
            <AccordionItem
              value="item-1"
              className="px-4 border-b border-purple-200/30 last:border-none"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-purple-900">
                Is Utopia only for technical people ?
              </AccordionTrigger>
              <AccordionContent className="text-purple-800 pb-4">
                Utopia welcomes both technical and non-technical people
                passionate about AI and innovation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="px-4 border-b border-purple-200/30 last:border-none"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-purple-900">
                Can my company/association collaborate with Utopia ?
              </AccordionTrigger>
              <AccordionContent className="text-purple-800 pb-4">
                Yes ! Some of our best events were the fruit of collaboration
                with companies and other student associations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="px-4 border-b border-purple-200/30 last:border-none"
            >
              <AccordionTrigger className="hover:no-underline py-4 font-medium text-purple-900">
                How can I join Utopia and get in touch ?
              </AccordionTrigger>
              <AccordionContent className="text-purple-800 pb-4">
                Join the Utopia Whatsapp Community and connect with us on
                Linkedin/Instagram below.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Fade>
  );
};

export default QandA;

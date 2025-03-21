"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

// Event types for filtering
type EventCategory = "all" | "event" | "hack" | "forma";

// Event data interface
interface EventData {
  id: string;
  title: string;
  date: string;
  category: string;
  imagePath: string;
  description?: string;
  location?: string;
  speakers?: string[];
  recordingUrl?: string;
}

// Interface for the JSON structure
interface EventsJson {
  events: EventData[];
}

const PastEvents = () => {
  const [activeFilter, setActiveFilter] = useState<EventCategory>("all");
  const [eventsList, setEventsList] = useState<EventData[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch events from JSON file
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/events.json");
        if (!response.ok) {
          throw new Error("Failed to fetch events data");
        }

        const data: EventsJson = await response.json();

        // Sort by date descending (newest first)
        const sortedEvents = data.events.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setEventsList(sortedEvents);
        setFilteredEvents(sortedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Set empty arrays in case of error
        setEventsList([]);
        setFilteredEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    // Filter events based on selected category
    if (activeFilter === "all") {
      setFilteredEvents(eventsList);
    } else {
      setFilteredEvents(
        eventsList.filter((event) => event.category === activeFilter)
      );
    }
  }, [activeFilter, eventsList]);

  // Handler for filter clicks
  const handleFilterClick = (filter: EventCategory) => {
    setActiveFilter(filter);
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-xl text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <Fade triggerOnce>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#380f43] mb-4">
            Past Events
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Explore our previous events and activities
          </p>
        </Fade>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton
            active={activeFilter === "all"}
            onClick={() => handleFilterClick("all")}
          >
            All Events
          </FilterButton>
          <FilterButton
            active={activeFilter === "event"}
            onClick={() => handleFilterClick("event")}
          >
            Conferences
          </FilterButton>
          <FilterButton
            active={activeFilter === "hack"}
            onClick={() => handleFilterClick("hack")}
          >
            Hackathons
          </FilterButton>
          <FilterButton
            active={activeFilter === "forma"}
            onClick={() => handleFilterClick("forma")}
          >
            Formations
          </FilterButton>
        </div>

        {/* Events Grid - Adjust grid columns here to control card width */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No events found for this category.
          </p>
        )}
      </div>
    </section>
  );
};

// Filter Button Component
interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${
        active
          ? "bg-[#380f43] text-white font-medium"
          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
      }`}
    >
      {children}
    </button>
  );
};

// Event Card Component
interface EventCardProps {
  event: EventData;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "300px", maxHeight: "450px" }}
      >
        <Image
          src={event.imagePath}
          alt={event.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 6} // Load first 6 images with priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="mt-2">
              {new Date(event.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 mt-auto">
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              event.category === "event"
                ? "bg-purple-100 text-purple-800"
                : event.category === "hack"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {event.category === "event"
              ? "Event"
              : event.category === "hack"
              ? "Hackathon"
              : "Formation"}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PastEvents;

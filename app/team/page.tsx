import React from "react";
import { teamMembers } from "./data";
import TeamMemberCard from "./components/TeamMemberCard";
import ContactSection from "../Components/widgets/ContactSection";

export default function TeamPage() {
  // Separate founders from other team members
  const founders = teamMembers.filter((member) => member.isFounder);
  const otherMembers = teamMembers.filter((member) => !member.isFounder);

  return (
    <div className="min-h-screen mt-15">
      <div className="container mx-auto px-4 py-6 md:py-10" id="team-members">
        {/* Founders Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Founding Team
            </h2>
            <div className="mx-auto w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div key={founder.id} className="flex justify-center">
                <div className="w-full max-w-md">
                  <TeamMemberCard member={founder} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Team Members Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Team Members
            </h2>
            <div className="mx-auto w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {otherMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactSection />
    </div>
  );
}

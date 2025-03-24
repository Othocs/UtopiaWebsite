import React from "react";
import Image from "next/image";
import { TeamMember } from "../data";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  // Generate initials for fallback
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl ${
        member.isFounder ? "border-2 border-purple-300" : ""
      }`}
    >
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        />
        {/* Fallback always added in DOM but only shown if image fails to load via CSS */}
        <div className="absolute inset-0 flex items-center justify-center bg-purple-100 text-purple-800 text-4xl font-bold opacity-0 [.image-loading_&]:opacity-100">
          {initials}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-1">
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          {member.isFounder && (
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
              Founder
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-purple-600 mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>

        <div className="flex space-x-3">
          {member.socialLinks?.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={`LinkedIn profile of ${member.name}`}
            >
              <FaLinkedin size={20} />
            </a>
          )}

          {member.socialLinks?.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={`X (formerly Twitter) profile of ${member.name}`}
            >
              <FaXTwitter size={20} />
            </a>
          )}

          {member.socialLinks?.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={`GitHub profile of ${member.name}`}
            >
              <FaGithub size={20} />
            </a>
          )}

          {member.socialLinks?.email && (
            <a
              href={`mailto:${member.socialLinks.email}`}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <FaEnvelope size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  isFounder: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Yoan Di Cosmo",
    role: "President",
    imageUrl: "/team/yoan.jpeg",
    bio: "Engineering and Business student at CentraleSupélec & Essec. President of Utopia and Unaite",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/yoandicosmo/",
    },
  },
  {
    id: 2,
    name: "Simon Lorenzo",
    role: "Vice-President",
    imageUrl: "/team/simon.jpeg",
    bio: "Simon is an expert in fundraising and is currently helping innovative startups at Brakage.",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/simon-lorenzo/",
    },
  },
  {
    id: 3,
    name: "Othmane Menkor",
    role: "Head of Hackathon",
    imageUrl: "/team/otho.jpeg",
    bio: "Student at CentraleSupélec & Essec, regular hackathon participant and loves building AI oriented softwares. (Made this beautiful website in React)",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/othmane-menkor/",
      github: "https://github.com/othocs",
      twitter: "https://x.com/othocs",
    },
  },
  {
    id: 4,
    name: "Clément Sporrer",
    role: "Head of Formation",
    imageUrl: "/team/clement.jpeg",
    bio: "Essec student, ex-Amazon and only BBA selected for the Digital Disruption Chair",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/clementsporrer/",
    },
  },
  {
    id: 5,
    name: "Valentin Vandekerchove",
    role: "Founding Member",
    imageUrl: "/team/valentin.jpeg",
    bio: "ESSEC & Telecom Paris, passionate about Technology and currently working at BCG ",
    isFounder: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/valentinvdk/",
    },
  },
  {
    id: 6,
    name: "Valentine Batsale",
    role: "Founding Member",
    imageUrl: "/team/valentine.jpeg",
    bio: "MiM Essec, Data Consultante at Artefact",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/valentine-batsale-8470771b1/",
    },
  },
  {
    id: 7,
    name: "Colin Frisch",
    role: "Founding Member",
    imageUrl: "/team/colin.jpeg",
    bio: "AI and ML Research and Developpement, ESSEC - CentraleSupélec double degree",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/colinfrisch/",
    },
  },
  {
    id: 8,
    name: "Alexandre Raimbault",
    role: "Founding Member",
    imageUrl: "/team/alexandre.jpeg",
    bio: "MiM Essec, Ex-Artefact and currently analyst at Nebesta",
    isFounder: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alexandre-raimbault-7a988321b/",
    },
  },
];

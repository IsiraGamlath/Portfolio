export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "01",
    title: "Microsoft Azure Essentials",
    issuer: " by Microsoft",
    date: "2026",
    credentialUrl: "/certifications/Microsoft-Azure.png",
  },
  {
    id: "02",
    title: "MongoDB Data Modeling Path",
    issuer: " by MongoDB",
    date: "2026",
    credentialUrl: "/certifications/MongoDB.png",
  },
   {
    id: "03",
    title: "AI/ML Engineer Stage 1",
    issuer: " by SLIIT",
    date: "Ongoing",
    credentialUrl: "",
  },
   {
    id: "04",
    title: "AWS Cloud Practitioner Essentials",
    issuer: " by AWS",
    date: "Ongoing",
    credentialUrl: "",
  },
];
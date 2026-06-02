export type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
  tools: string[];
};

export type StackCategory = "AI/ML" | "Backend" | "Frontend" | "Infra";

export type StackEntry = {
  name: string;
  category: StackCategory;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number | null;
};

export type Language = {
  name: string;
  level: string;
};

export type ContactLink = {
  label: string;
  href: string;
  external: boolean;
};

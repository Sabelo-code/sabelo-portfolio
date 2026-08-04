import { Briefcase, GraduationCap, Server, BookOpen } from "lucide-react";
import { theme } from "../theme";


export const experience = [

  {
    title: "Zendesk Administrator",
    company: "CX Expert",
    meta: "Oct 2025 — Present",
    desc:
      "Configured and maintained the Zendesk platform and customer support workflows. Troubleshot system issues, implemented process improvements, monitored platform performance, maintained documentation, and supported business users.",
    icon: Briefcase,
    color: theme.pulse,
  },


  {
    title: "Junior IT Support Technician",
    company: "Global Network Systems",
    meta: "Feb 2025 — July 2025",
    desc:
      "Provided first-line IT support for Microsoft 365, Windows environments, and user accounts. Managed incidents through ticketing systems, met SLA targets, escalated complex technical issues, and provided user support through email and remote assistance.",
    icon: Server,
    color: theme.signalSoft,
  },

];



export const education = [

  {
    title: "AI & IT Support Bootcamp",
    company: "CAPACITI Digital Associate Programme",
    meta: "Sep 2025 — Feb 2026",
    desc:
      "Completed intensive training focused on IT service desk operations, Zendesk administration, AWS Cloud Foundations, cybersecurity fundamentals, artificial intelligence, automation, and modern software development practices.",
    icon: BookOpen,
    color: theme.pulse,
  },


  {
    title: "BSc Computer Science & Mathematics",
    company: "University of Zululand",
    meta: "2021 — 2024",
    desc:
      "Graduated with practical experience in software development, algorithms, databases, applied mathematics, artificial intelligence, and building technology solutions through academic projects.",
    icon: GraduationCap,
    color: theme.signalSoft,
  },

];


export default {
  experience,
  education,
};
import { theme } from "../theme";

export const projects = [
  {
    title: "AI Sentiment Analysis",
    desc:
      "A machine learning application that analyses customer reviews and text data to classify sentiment. Built with a complete ML pipeline, data processing workflow, and interactive dashboard.",
    tech: [
      "Python",
      "Firebase",
      "Hugging Face",
      "Pandas",
      "Streamlit",
    ],
    tag: "AI",
    color: theme.pulse,
    links: [
      {
        label: "Source",
        href: "https://github.com/Sabelo-code/Sentiment",
      },
      {
        label: "Live Demo",
        href: "https://sentiment-aq3mkbathyvjf5yuo5egaa.streamlit.app/",
      },
    ],
    img:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "ATS Resume Builder",
    desc:
      "A web-based ATS resume optimisation platform that helps users create recruiter-friendly resumes by analysing job descriptions, keywords, and required skills.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Gemini AI",
    ],
    tag: "WEB",
    color: theme.signalSoft,
    links: [
      {
        label: "Source",
        href: "https://github.com/Sabelo-code/Resume-Builder",
      },
      {
        label: "Live Demo",
        href: "https://magnificent-starlight-8ff666.netlify.app/",
      },
    ],
    img:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "FreshScan — Grape Quality Scanner",
    desc:
      "A computer vision prototype designed for automated grape quality inspection. The system uses image classification to support manufacturing quality checks.",
    tech: [
      "Computer Vision",
      "Deep Learning",
      "OpenCV",
      "Firebase",
      "Teachable Machine",
    ],
    tag: "AI",
    color: theme.pulse,
    links: [
      {
        label: "Prototype",
        href:
          "https://www.figma.com/make/r0pReRdMsAd0p9gSQ3wQXy/FreshScan?p=f&fullscreen=1",
      },
    ],
    img:
"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "AI Support Portal",
    desc:
      "A full-stack customer support platform combining AI assistance, knowledge management, and support workflows. Designed to improve response efficiency through automated assistance.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Cloudflare Workers",
      "REST API",
    ],
    tag: "FULL STACK",
    color: theme.signalSoft,
    links: [
      {
        label: "Source",
        href:
          "https://github.com/Sabelo-code/AI-SUPPORT-PORTAL-PROJECT",
      },
    ],
    img:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Building Smart Varsity",
    desc:
      "A MERN-stack university event management platform developed as a final-year project. The system enables students to discover, create, and manage campus events.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
    tag: "FULL STACK",
    color: theme.signalSoft,
    links: [
      {
        label: "Source",
        href: "https://github.com/Sabelo-code",
      },
    ],
    img:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "HowLow Services Zendesk Implementation",
    desc:
      "A complete customer support system implementation including ticket workflows, custom fields, ticket forms, triggers, automations, macros, Help Centre configuration, and reporting setup.",
    tech: [
      "Zendesk",
      "Customer Support",
      "Workflow Automation",
      "CX Operations",
    ],
    tag: "IT SYSTEMS",
    color: theme.slate,
    links: [],
    img:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "ASERION Digital Platform",
    desc:
      "A digital transformation platform focused on simplifying user applications, onboarding processes, and service delivery through modern web technologies.",
    tech: [
      "React",
      "JavaScript",
      "Supabase",
      "Node.js",
      "REST API",
    ],
    tag: "DIGITAL TRANSFORMATION",
    color: theme.signalSoft,
    links: [
      {
        label: "Source",
        href: "https://github.com/Sabelo-code",
      },
    ],
    img:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default projects;
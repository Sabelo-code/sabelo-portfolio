import { theme } from "../theme";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skills = [

  {
    group: "Programming Languages",
    color: theme.pulse,
    items: [
      {
        name: "Python",
        icon: `${ICON_BASE}/python/python-original.svg`
      },
      {
        name: "JavaScript",
        icon: `${ICON_BASE}/javascript/javascript-original.svg`
      },
      {
        name: "SQL",
        icon: `${ICON_BASE}/azuresqldatabase/azuresqldatabase-original.svg`
      },
    ],
  },


  {
    group: "Web Development",
    color: theme.signalSoft,
    items: [
      {
        name: "HTML5",
        icon: `${ICON_BASE}/html5/html5-original.svg`
      },
      {
        name: "CSS3",
        icon: `${ICON_BASE}/css3/css3-original.svg`
      },
      {
        name: "React",
        icon: `${ICON_BASE}/react/react-original.svg`
      },
      {
        name: "Node.js",
        icon: `${ICON_BASE}/nodejs/nodejs-original-wordmark.svg`
      },
      {
        name: "Firebase",
        icon: `${ICON_BASE}/firebase/firebase-original.svg`
      },
      {
        name: "Supabase",
        icon: `${ICON_BASE}/supabase/supabase-original.svg`
      },
    ],
  },


  {
    group: "AI & Data",
    color: theme.pulse,
    items: [
      {
        name: "TensorFlow",
        icon: `${ICON_BASE}/tensorflow/tensorflow-original.svg`
      },
      {
        name: "Google Colab",
        icon: `${ICON_BASE}/googlecolab/googlecolab-original.svg`
      },
      {
        name: "Pandas",
        icon: `${ICON_BASE}/pandas/pandas-original.svg`
      },
      {
        name: "OpenAI API",
        icon: `${ICON_BASE}/openapi/openapi-original.svg`
      },
    ],
  },


  {
    group: "Cloud & Developer Tools",
    color: theme.signalSoft,
    items: [
      {
        name: "AWS",
        icon: `${ICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`
      },
      {
        name: "Git",
        icon: `${ICON_BASE}/git/git-original.svg`
      },
      {
        name: "GitHub",
        icon: `${ICON_BASE}/github/github-original.svg`
      },
      {
        name: "VS Code",
        icon: `${ICON_BASE}/vscode/vscode-original.svg`
      },
      {
        name: "Cloudflare",
        icon: `${ICON_BASE}/cloudflare/cloudflare-original.svg`
      },
    ],
  },


  {
    group: "IT Support & CX",
    color: theme.slate,
    items: [
      {
        name: "Zendesk",
         icon: "https://cdn.simpleicons.org/zendesk"
      },
      {
        name: "Microsoft 365",
        icon: `${ICON_BASE}/microsoftsqlserver/microsoftsqlserver-plain.svg`
      },
      {
        name: "Ticket Management",
        icon: `${ICON_BASE}/jira/jira-original.svg`
      },
    ],
  },

];


export default skills;
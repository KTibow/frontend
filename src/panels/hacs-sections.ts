import { Route } from "../data/common";
export const sections = {
  updates: [],
  panels: [
    {
      icon: "mdi:puzzle",
      id: "integrations",
      categories: ["integration"],
    },
    {
      icon: "mdi:palette",
      id: "frontend",
      categories: ["plugin", "theme"],
    },
    {
      icon: "mdi:robot",
      id: "automation",
      categories: ["python_script", "appdaemon", "netdaemon"],
    },
  ],
};

export const sections2 = [
  {
    section: "core",
    tabs: [
      {
        icon: "mdi:puzzle",
        id: "integration",
      },
      {
        icon: "mdi:puzzle",
        id: "packages",
      },
    ],
  },
  {
    section: "frontend",
    tabs: [
      {
        icon: "mdi:palette",
        id: "plugin",
      },
      {
        icon: "mdi:palette",
        id: "themes",
      },
      {
        icon: "mdi:palette",
        id: "modules",
      },
    ],
  },
  {
    section: "automation",
    tabs: [
      {
        icon: "mdi:robot",
        id: "python_script",
      },
      {
        icon: "mdi:robot",
        id: "appdaemon",
      },
      {
        icon: "mdi:robot",
        id: "netdaemon",
      },
    ],
  },
];

export const activePanel = (route: Route) => {
  const active = route.path.replace("/", "");
  return sections2.find((section) => section.tabs.find((tab) => tab.id === active));
};

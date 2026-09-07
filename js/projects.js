export const projects = [
  {
    id: "umzimkhulu-memorial-hall",
    title: "uMzimkhulu Memorial Hall",
    category: "Community Infrastructure",
    year: "2021",
    completed: "17 November 2021",
    location: "uMzimkhulu",
    client: "uMzimkhulu Memorial Hall",
    excerpt: "Community hall in uMzimkhulu.",
    hero: "images/idw/umzimkhulu.jpg",
    gallery: ["images/idw/umzimkhulu.jpg"],
    related: ["anglican-union", "kokstad-project"],
    paragraphs: [
      "Project name: uMzimkhulu Memorial Hall. Client: uMzimkhulu Memorial Hall. Location: uMzimkhulu.",
      "Completion date: 17 November 2021.",
    ],
  },
  {
    id: "anglican-union",
    title: "Anglican Union",
    category: "Community Infrastructure",
    year: "",
    completed: "",
    location: "South Africa",
    client: "Anglican Union",
    excerpt: "Anglican Union — project from iQhayiya Design Workshop.",
    hero: "images/idw/anglican-union.svg",
    gallery: ["images/idw/anglican-union.svg"],
    related: ["umzimkhulu-memorial-hall", "his-house"],
    paragraphs: [
      "Project name: Anglican Union.",
      "Photographs and a full project note will be added by the studio.",
    ],
  },
  {
    id: "his-house",
    title: "His House",
    category: "Residential",
    year: "",
    completed: "",
    location: "South Africa",
    client: "",
    excerpt: "A house by iQhayiya Design Workshop.",
    hero: "images/idw/his-house.svg",
    gallery: ["images/idw/his-house.svg"],
    related: ["anglican-union", "kokstad-project"],
    paragraphs: [
      "Project name: His House.",
      "Photographs and a full project note will be added by the studio.",
    ],
  },
  {
    id: "kokstad-project",
    title: "Kokstad Project",
    category: "Urban Design",
    year: "",
    completed: "",
    location: "Kokstad",
    client: "",
    excerpt: "Kokstad project — precinct planning and urban design.",
    hero: "images/idw/kokstad.svg",
    gallery: ["images/idw/kokstad.svg"],
    related: ["umzimkhulu-memorial-hall", "his-house"],
    paragraphs: [
      "Project name: Kokstad Project. Location: Kokstad.",
      "Photographs and a full project note will be added by the studio.",
    ],
  },
];

export function getProject(id) {
  return projects.find((project) => project.id === id) || null;
}

export function getRelated(project) {
  if (!project) return [];
  return project.related.map(getProject).filter(Boolean);
}

export function featuredProjects() {
  return projects;
}

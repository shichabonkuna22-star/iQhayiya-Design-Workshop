export const projects = [
  {
    id: "umzimkhulu-memorial-hall",
    title: "uMzimkhulu Memorial Hall",
    category: "Community Infrastructure",
    year: "2021",
    completed: "17 November 2021",
    location: "uMzimkhulu",
    client: "uMzimkhulu Memorial Hall",
    excerpt: "Community hall in uMzimkhulu, KwaZulu-Natal.",
    hero: "images/idw/umzimkhulu-street.jpg",
    gallery: [
      "images/idw/umzimkhulu-street.jpg",
      "images/idw/umzimkhulu-map.png",
      "images/idw/umzimkhulu.jpg",
    ],
    related: ["anglican-union", "matatiele-social-development"],
    paragraphs: [
      "Project name: uMzimkhulu Memorial Hall. Location: uMzimkhulu.",
      "Completion date: 17 November 2021.",
    ],
  },
  {
    id: "matatiele-social-development",
    title: "Matatiele Social Development",
    category: "Community Infrastructure",
    year: "",
    completed: "",
    location: "Matatiele",
    client: "",
    excerpt: "Social Development offices in Matatiele.",
    hero: "images/idw/matatiele-social-development.jpg",
    gallery: ["images/idw/matatiele-social-development.jpg"],
    related: ["umzimkhulu-memorial-hall", "anglican-union"],
    paragraphs: [
      "Project name: Matatiele Social Development. Location: Matatiele.",
    ],
  },
  {
    id: "house-qwalela",
    title: "House Qwalela",
    category: "Residential",
    year: "",
    completed: "",
    location: "South Africa",
    client: "",
    excerpt: "House Qwalela, a residential project by iQhayiya Design Workshop.",
    hero: "images/idw/house-qwalela-site.jpg",
    gallery: [
      "images/idw/house-qwalela-cabinet.jpg",
      "images/idw/house-qwalela-scaffold.jpg",
      "images/idw/house-qwalela-brick.jpg",
      "images/idw/house-qwalela-drawing.jpg",
      "images/idw/house-qwalela-colonnade.jpg",
      "images/idw/house-qwalela-sketch.jpg",
      "images/idw/house-qwalela-lounge.jpg",
      "images/idw/house-qwalela-site.jpg",
    ],
    related: ["matatiele-social-development", "anglican-union"],
    paragraphs: ["Project name: House Qwalela."],
  },
  {
    id: "anglican-union",
    title: "Anglican Mothers’ Union Centre",
    category: "Community Infrastructure",
    year: "",
    completed: "",
    location: "Kokstad",
    client: "Diocese of Umzimvubu",
    excerpt:
      "Anglican Mothers’ Union Centre for the Diocese of Umzimvubu, Kokstad. Pro bono.",
    hero: "images/idw/anglican-union-render.jpg",
    gallery: ["images/idw/anglican-union-render.jpg"],
    related: ["umzimkhulu-memorial-hall", "house-qwalela"],
    paragraphs: [
      "Project name: Anglican Mothers’ Union Centre. Client: Diocese of Umzimvubu. Location: Kokstad.",
      "The work was undertaken pro bono.",
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

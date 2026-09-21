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
    related: ["anglican-union", "kokstad-project"],
    paragraphs: [
      "Project name: uMzimkhulu Memorial Hall. Location: uMzimkhulu.",
      "Completion date: 17 November 2021.",
    ],
  },
  {
    id: "kokstad-project",
    title: "Kokstad Trading Stalls",
    category: "Urban Design",
    year: "",
    completed: "",
    location: "Kokstad, KwaZulu-Natal",
    client: "Greater Kokstad Municipality",
    excerpt: "Trading stalls for Greater Kokstad Municipality, KwaZulu-Natal.",
    hero: "images/idw/kokstad.png",
    gallery: ["images/idw/kokstad.png"],
    related: ["umzimkhulu-memorial-hall", "anglican-union"],
    paragraphs: [
      "Project name: Kokstad trading stalls. Client: Greater Kokstad Municipality. Location: Kokstad, KwaZulu-Natal.",
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
    hero: "images/idw/house-qwalela.png",
    gallery: ["images/idw/house-qwalela.png"],
    related: ["kokstad-project", "anglican-union"],
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
    hero: "images/idw/anglican-union.png",
    gallery: ["images/idw/anglican-union.png"],
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

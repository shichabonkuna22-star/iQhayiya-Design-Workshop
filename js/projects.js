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
    hero: "images/idw/umzimkhulu-colour-render.jpg",
    gallery: [
      "images/idw/umzimkhulu-line-drawing.jpg",
      "images/idw/umzimkhulu-interior-drawing.jpg",
      "images/idw/umzimkhulu-axon-view.jpg",
      "images/idw/umzimkhulu-section-bb.jpg",
      "images/idw/umzimkhulu-street-site.jpg",
      "images/idw/umzimkhulu-colour-render.jpg",
      "images/idw/umzimkhulu-hall-works.jpg",
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
    hero: "images/idw/matatiele-area-office.jpg",
    card: "images/idw/matatiele-exterior-render.jpg",
    gallery: [
      "images/idw/matatiele-concept-sketch.jpg",
      "images/idw/matatiele-model.jpg",
      "images/idw/matatiele-exterior-render.jpg",
      "images/idw/matatiele-courtyard-render.jpg",
      "images/idw/matatiele-interior-render.jpg",
      "images/idw/matatiele-works.jpg",
      "images/idw/matatiele-area-office.jpg",
      "images/idw/matatiele-waiting.jpg",
      "images/idw/matatiele-corridor.jpg",
    ],
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
      "images/idw/house-qwalela-sketch.jpg",
      "images/idw/house-qwalela-drawing.jpg",
      "images/idw/house-qwalela-colonnade.jpg",
      "images/idw/house-qwalela-brick.jpg",
      "images/idw/house-qwalela-scaffold.jpg",
      "images/idw/house-qwalela-cabinet.jpg",
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
    gallery: [
      "images/idw/anglican-section.jpg",
      "images/idw/anglican-concept-sketch.jpg",
      "images/idw/anglican-floor-plan.jpg",
      "images/idw/anglican-section-detail.jpg",
      "images/idw/anglican-exterior-1.jpg",
      "images/idw/anglican-exterior-2.jpg",
      "images/idw/anglican-exterior-3.jpg",
      "images/idw/anglican-exterior-4.jpg",
    ],
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

import { mountChrome, escapeHtml } from "./nav.js";
import { getProject } from "./projects.js?v=meet12";

mountChrome("work");

const params = new URLSearchParams(location.search);
const project = getProject(params.get("id"));
const root = document.getElementById("project-root");

if (!project || !root) {
  if (root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Archive</p>
        <h1>Project not found.</h1>
        <p class="lede"><a href="work.html">Return to work</a></p>
      </section>
    `;
  }
} else {
  document.title = `${project.title} — iQhayiya Design Workshop`;

  const details = [`Project name: ${project.title}`];
  if (project.location) details.push(`Location ${project.location}`);
  const completed = project.completed || project.year;
  if (completed) details.push(`Completed ${completed}`);

  const gallery = project.gallery.filter((src) => src && src !== project.hero);
  const galleryHtml = gallery.length
    ? `<section class="gallery">
      <p class="eyebrow">Images</p>
      <div class="gallery-grid">
        ${gallery
          .map(
            (src, index) => `
          <figure class="gallery-item${index === 0 ? " gallery-item-lead" : ""}">
            <img src="${src}" alt="${escapeHtml(project.title)}">
          </figure>`
          )
          .join("")}
      </div>
    </section>`
    : "";

  root.innerHTML = `
    <section class="hero project-hero">
      <img src="${project.hero}" alt="${escapeHtml(project.title)}">
      <div class="hero-scrim"></div>
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml([project.category, project.location, project.year].filter(Boolean).join(" · "))}</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p class="lede">${escapeHtml(project.excerpt)}</p>
      </div>
    </section>

    <section class="project-intro">
      <p class="project-copy">${escapeHtml(details.join(" | "))}</p>
    </section>

    ${galleryHtml}

    <section class="more-projects">
      <a class="more-projects-btn" href="work.html">More Projects</a>
    </section>
  `;
}

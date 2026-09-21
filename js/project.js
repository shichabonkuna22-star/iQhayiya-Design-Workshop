import { mountChrome, escapeHtml } from "./nav.js";
import { getProject } from "./projects.js?v=meet39";

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

  const parts = [
    ["Project name", project.title],
    project.location ? ["Location", project.location] : null,
    (project.completed || project.year)
      ? ["Completed", project.completed || project.year]
      : null,
  ].filter(Boolean);
  const detailsHtml = parts
    .map(
      ([label, value], index) =>
        `${index ? '<span class="meta-sep">|</span>' : ""}<span class="meta-label">${escapeHtml(label)}:</span> <span class="meta-value">${escapeHtml(value)}</span>`
    )
    .join("");

  const gallery = (project.gallery || []).filter(Boolean);
  const galleryHtml = gallery.length
    ? `<section class="gallery">
      <div class="gallery-grid">
        ${gallery
          .map(
            (src) => `
          <figure class="gallery-item">
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
      <p class="project-copy">${detailsHtml}</p>
    </section>

    ${galleryHtml}

    <section class="more-projects">
      <a class="more-projects-btn" href="work.html">More Projects</a>
    </section>
  `;
}

import { mountChrome, escapeHtml } from "./nav.js?v=meet46";
import { getArticle } from "./articles.js?v=meet48";

mountChrome("news");

const params = new URLSearchParams(location.search);
const article = getArticle(params.get("id"));
const root = document.getElementById("article-root");

if (!article || !root) {
  if (root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">News</p>
        <h1>Story not found.</h1>
        <p class="lede"><a href="news.html">Return to news</a></p>
      </section>
    `;
  }
} else {
  document.title = `${article.title} — iQhayiya Design Workshop`;

  const parts = [
    ["Story", article.title],
    article.category ? ["Section", article.category] : null,
    article.dateline ? ["Published", article.dateline] : null,
  ].filter(Boolean);
  const detailsHtml = parts
    .map(
      ([label, value], index) =>
        `${index ? '<span class="meta-sep">|</span>' : ""}<span class="meta-label">${escapeHtml(label)}:</span> <span class="meta-value">${escapeHtml(value)}</span>`
    )
    .join("");

  const bodyHtml = (article.paragraphs || [])
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  const linkHtml =
    article.sourceHref && article.sourceLinkLabel
      ? ` <a href="${escapeHtml(article.sourceHref)}" target="_blank" rel="noopener">${escapeHtml(article.sourceLinkLabel)}</a>`
      : "";

  root.innerHTML = `
    <section class="page-hero article-head">
      <p class="news-kicker">${escapeHtml(article.category)}</p>
      <h1>${escapeHtml(article.title)}.</h1>
      <p class="news-byline">${escapeHtml(article.byline || "")}</p>
    </section>

    <section class="project-intro">
      <p class="project-copy">${detailsHtml}</p>
    </section>

    <section class="article-clip-wrap">
      <figure class="news-clip article-clip" data-lightbox>
        <img src="${article.image}" alt="${escapeHtml(article.imageAlt || article.title)}">
        <figcaption>Click to enlarge · ${escapeHtml(article.caption || "")}</figcaption>
      </figure>
    </section>

    <section class="article-body news-body">
      ${bodyHtml}
      <p class="news-source">${escapeHtml(article.source || "")}${linkHtml}</p>
    </section>

    <section class="more-projects">
      <a class="more-projects-btn" href="news.html">More News</a>
    </section>
  `;

  bindLightbox(root, article.title);
}

function bindLightbox(root, title) {
  let box = document.querySelector(".lightbox");
  if (!box) {
    box = document.createElement("div");
    box.className = "lightbox";
    box.hidden = true;
    box.innerHTML = `<img alt="">`;
    document.body.appendChild(box);
  }
  const large = box.querySelector("img");

  const close = () => {
    box.hidden = true;
    large.removeAttribute("src");
    document.body.style.overflow = "";
  };

  root.querySelectorAll("[data-lightbox] img").forEach((img) => {
    img.addEventListener("click", () => {
      large.src = img.currentSrc || img.src;
      large.alt = img.alt || title;
      box.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  box.addEventListener("click", (event) => {
    if (event.target === large) return;
    close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !box.hidden) close();
  });
}

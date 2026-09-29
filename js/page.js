import { mountChrome } from "./nav.js?v=meet46";

const page = document.body.dataset.nav || "";
mountChrome(page);

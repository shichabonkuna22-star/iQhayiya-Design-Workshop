import { mountChrome } from "./nav.js?v=meet55";

const page = document.body.dataset.nav || "";
mountChrome(page);

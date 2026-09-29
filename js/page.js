import { mountChrome } from "./nav.js?v=meet32";

const page = document.body.dataset.nav || "";
mountChrome(page);

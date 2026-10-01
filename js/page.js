import { mountChrome } from "./nav.js?v=meet70";

const page = document.body.dataset.nav || "";
mountChrome(page);

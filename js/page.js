import { mountChrome } from "./nav.js";

const page = document.body.dataset.nav || "";
mountChrome(page);

import rules from "./rules.js";
import eventActivate from "./events.js";
import { setCookie, getCookie } from "./cookies.js";
document.getElementById("score-number").innerHTML = getCookie("userScore") ?
    getCookie("userScore") :
    "--";
rules();
eventActivate();
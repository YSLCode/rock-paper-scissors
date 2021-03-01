import uiUpdater from "./ContentUpdater.js";
import gameLogic from "./gameLogic.js";

function getEvents() {
    let getElement = (i) => document.getElementById(i);
    let elements = ["paper", "scissors", "rock"];
    let elementNames = ["paper", "scissors", "rock"];

    for (let i = 0; elements[i]; i++) {
        elements[i] = getElement(elements[i]);
        elements[i] = elements[i].addEventListener("click", () => {
            let result = gameLogic(elementNames[i]);
            uiUpdater(elementNames[i], result[1], result[0]);
        });
    }
}

export default getEvents;
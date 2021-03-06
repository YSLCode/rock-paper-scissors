import {
    setCookie,
    getCookie
} from "./cookies.js";

function uiUpdater(userSelected, systemSelected, gameResult, userScore) {
    let template = `

            <div class="game-option-result" id="${userSelected}-result">
            <div class="mask">

            </div>
            </div>

            <div class="game-result"> 
                <div class="game-result-text">
                   YOU ${gameResult.toUpperCase()} 
                </div>
                <button id="play-again">PLAY AGAIN</button>
            </div>

            <div class="game-option-result" id="${systemSelected}-result">
            <div class="mask">

            </div>
            </div>`;


    if (getCookie("userScore")) {
        setCookie("userScore", getCookie("userScore") * 1 + userScore);
    } else {
        setCookie("userScore", userScore);
    }


    document.getElementById("game-body").innerHTML = template;

    document.getElementById("score-number").innerHTML = getCookie("userScore");

    document
        .getElementById("play-again")
        .addEventListener("click", () => location.reload());
}

export default uiUpdater;
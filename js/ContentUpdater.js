function uiUpdater(userSelected, systemSelected, gameResult) {
    let template =
        `
        <div id='result-body' class='result-body'>
            <div class="game-option-result" id="` +
        userSelected +
        `">
            <div class="mask">

            </div>
            </div>
    

            <div class="game-option-result" id="${systemSelected}">
            <div class="mask">

            </div>
            </div>

            <div class="game-result">
            ${gameResult}
            </div>

        </div>
    `;

    document.getElementById("game-body").innerHTML = template;
    document.getElementById("game-body").style.background = "rgba(0,0,0,0)";
}

export default uiUpdater;
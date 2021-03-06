function logic(userSelected) {
    let options = {
        rock: 0,
        paper: 1,
        scissors: 2,
    };
    let option_names = ["rock", "paper", "scissors"];

    function systemSelection() {
        let temp = Math.floor(Math.random() * 3);
        return temp;
    }

    userSelected = options[userSelected];
    let systemSelected = systemSelection();

    if ((userSelected + 1) % 3 == systemSelected) {
        return ["lost", option_names[systemSelected], -1];
    } else if (userSelected == systemSelected) {
        return ["tie", option_names[systemSelected], 0];
    } else {
        return ["win", option_names[systemSelected], 1];
    }
}

export default logic;
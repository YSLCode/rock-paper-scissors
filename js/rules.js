function rulesEvent() {
    document.getElementById("rules").addEventListener("click", () => {
        document.getElementById("rules-container").style.display = "block";
    });
    document.getElementById("exit").addEventListener("click", () => {
        document.getElementById("rules-container").style.display = "none";
    });
}

export default rulesEvent;
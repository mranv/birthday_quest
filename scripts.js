document.addEventListener("DOMContentLoaded", function () {
    let clickCount = 0;
    const startButton = document.getElementById("startButton");
    const clickMessage = document.getElementById("clickMessage");
    const loadingIcon = document.createElement("div");

    loadingIcon.textContent = "Loading...";
    loadingIcon.style.display = "none";
    document.body.appendChild(loadingIcon);

    function redirectToQuestPage() {
        setTimeout(function () {
            loadingIcon.style.display = "none";
            window.location.href = "quest1.html";
        }, 4000);
    }

    startButton.addEventListener("click", function () {
        clickCount++;

        if (clickCount === 3) {
            clickMessage.textContent = "prakriti, try again slower!";
            clickMessage.hidden = false;
        } else if (clickCount === 5) {
            clickMessage.textContent = "prakriti! Try softer please...";
        } else if (clickCount === 7) {
            loadingIcon.style.display = "block";
            redirectToQuestPage();
        }
    });
});

let currentScreen = 1;
const totalScreens = 8;

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");


// =========================
// SCREEN SWITCHING
// =========================

function showScreen(number) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const next = document.getElementById(`screen${number}`);

    if (next) {
        next.classList.add("active");
    }

    currentScreen = number;

    updateProgress();
}


// =========================
// NEXT SCREEN
// =========================

function nextScreen() {

    if (currentScreen < totalScreens) {
        showScreen(currentScreen + 1);
    }

}


// =========================
// PROGRESS BAR
// =========================

function updateProgress() {

    progressText.textContent =
        `0${currentScreen} / 0${totalScreens}`;

    const percentage =
        (currentScreen / totalScreens) * 100;

    progressBar.style.width =
        percentage + "%";
}


// =========================
// SURPRISE REVEAL
// =========================

const revealBtn =
    document.getElementById("revealBtn");

const revealMessage =
    document.getElementById("revealMessage");

const giftBox =
    document.getElementById("giftBox");


if (revealBtn) {

    revealBtn.addEventListener("click", () => {

        revealMessage.classList.add("show");

        revealBtn.style.display = "none";

        giftBox.textContent = "💖";

        createConfetti();

    });

}


// =========================
// CONFETTI EFFECT
// =========================

function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const piece =
            document.createElement("div");

        piece.style.position = "fixed";

        piece.style.width = "8px";
        piece.style.height = "8px";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-10px";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.background = [
            "#b88a43",
            "#e8a4b5",
            "#302624",
            "#f5d7a4"
        ][
            Math.floor(Math.random() * 4)
        ];

        piece.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";


        document.body.appendChild(piece);


        const duration =
            2000 + Math.random() * 2500;


        piece.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`
                }
            ],

            {
                duration: duration,
                easing: "ease-out"
            }

        );


        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}


// =========================
// REPLAY EXPERIENCE
// =========================

function restartExperience() {

    const reveal =
        document.getElementById("revealMessage");

    const button =
        document.getElementById("revealBtn");

    reveal.classList.remove("show");

    button.style.display = "inline-block";

    giftBox.textContent = "🎁";

    showScreen(1);

}


// =========================
// START WEBSITE
// =========================

showScreen(1);
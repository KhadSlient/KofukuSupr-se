function startTest() {
    window.location.href = "test.html";
}


/* ========================= */
/* SORU 1 */
/* ========================= */

function answerQuestion(answer) {

    const result = document.getElementById("question1Result");

    // Doğru cevap: 3 - Nişantaşı Üniversitesi

    if (answer === 3) {

        result.innerHTML = "Baya basitti ama olsun 💗";

        setTimeout(() => {

            document.getElementById("question1").classList.add("hidden");

            document.getElementById("question2").classList.remove("hidden");

        }, 1000);

    } else {

        result.innerHTML = "Dalga geçme hadiiii";

    }
}


/* ========================= */
/* SORU 2 */
/* ========================= */

const slider = document.getElementById("loveSlider");
const needle = document.getElementById("needle");
const loveResult = document.getElementById("loveResult");


if (slider) {

    slider.addEventListener("input", function () {

        const value = Number(this.value);


        /*
            0 = -90 derece
            1 = -30 derece
            2 = 30 derece
            3 = 90 derece
        */

        const angle = -90 + (value / 3) * 180;

        needle.style.transform =
            `rotate(${angle}deg)`;


        if (value < 0.75) {

            loveResult.innerHTML = "Ne demek Sevmiyorum 😭";

        } else if (value < 1.5) {

            loveResult.innerHTML = "Birazmı 🥺";

        } else if (value < 2.5) {

            loveResult.innerHTML = "Bende seni seviyorum aşkım ❤️";

        } else {

            loveResult.innerHTML = "Ne diyosun ya  ❤️‍🔥";

        }

    });

}


/* ========================= */
/* TESTİ BİTİR */
/* ========================= */

function finishTest() {

    document.getElementById("question2").classList.add("hidden");

    document.getElementById("result").classList.remove("hidden");

}

function openGift() {

    const giftBox = document.getElementById("giftBox");

    // Daha önce açıldıysa tekrar çalıştırma
    if (giftBox.classList.contains("opened")) {
        return;
    }

    giftBox.classList.add("opened");

    createConfetti();

    setTimeout(() => {

        document.getElementById("giftPhoto")
            .classList.remove("hidden");

    }, 900);
}


/* ========================= */
/* KONFETİ OLUŞTUR */
/* ========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        const x =
            (Math.random() - 0.5) * 600;

        const y =
            Math.random() * 500 + 100;

        piece.style.setProperty(
            "--x",
            `${x}px`
        );

        piece.style.setProperty(
            "--y",
            `${y}px`
        );

        piece.style.left =
            "50%";

        piece.style.background =
            `hsl(${Math.random() * 360}, 80%, 70%)`;

        piece.style.animationDelay =
            `${Math.random() * 0.3}s`;

        container.appendChild(piece);

    }

}
let dice = document.getElementById("dice");
let score = document.getElementById("score");
let button = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");

let total = 0;

const diceGame = () => {

    let diceNumber = dice.textContent = Number(Math.ceil(Math.random() * 6));

    total += diceNumber;

    score.textContent = total;

    if (diceNumber === 1) {
        Swal.fire({
            icon: "error",
            title: "You Lose!",
            text: "Something went wrong!"
        });
        resetGame();
        return
    }

    if (total >= 30) {
        Swal.fire({
            title: "You Win!",
            icon: "success"
        });
        resetGame();
        return
    }
};

const resetGame = () => {
    dice.textContent = 1;
    score.textContent = 0;
    total = 0;
}

resetBtn.onclick = resetGame;
button.onclick = diceGame

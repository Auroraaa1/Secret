function sayYes() {
    // optional: fade out music first
    const music = document.getElementById("bgMusic");
    if (music) {
        music.pause();
    }

    // redirect to notebook page
    window.location.href = "notebook.html";
}


function moveButton() {
    const button = document.querySelector('.no');

    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const padding = 20; // space from edges

    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "fixed"; // better for mobile
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}


function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.2; // 0 = silent, 1 = full volume
    music.play();
}
Math.random() * window.innerHeight

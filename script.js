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
    button.style.position = "absolute";
    button.style.top = Math.random() * window.innerHeight + "px";
    button.style.left = Math.random() * window.innerWidth + "px";
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

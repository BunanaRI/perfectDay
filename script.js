fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

const sprites = document.querySelectorAll(".sprite");

const frameWidth = 128;
const frames = [0, 2]; // frame 1 and frame 3
let index = 0;

setInterval(() => {
  const frame = frames[index];

  sprites.forEach(sprite => {
    sprite.style.backgroundPosition =
      `${-frame * frameWidth}px 0`;

    // only sprite-right gets flipped on frame 1
    if (sprite.id === "sprite-right" && frame === 0) {
      sprite.style.transform = "scaleX(-1)";
    } else {
      sprite.style.transform = "scaleX(1)";
    }
  });

  index = (index + 1) % frames.length;
}, 300);


const player = document.querySelector("#record-player");
const record = document.querySelector("#record");
const music = document.querySelector("#music");
const status = document.querySelector("#music-status");

music.volume = 0.3;

player.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    record.classList.add("playing");
    player.classList.add("playing");

    status.textContent = "now playing ♪";
  } else {
    music.pause();

    record.classList.remove("playing");
    player.classList.remove("playing");

    status.textContent = "click to play ♪";
  }
});

let timer = 60;
let score = 0;
let hitrn;
function makeBubble() {
  let bottom = document.querySelector("#pbtm");
  let clutter = "";
  for (let i = 1; i < 151; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  bottom.innerHTML = clutter;
}

function runTimer() {
  let timeint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#increaseScore").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  if (!dets.target.classList || !dets.target.classList.contains("bubble"))
    return;
  let clickedNum = parseInt(dets.target.textContent, 10);
  if (Number.isNaN(clickedNum)) return;
  if (hitrn === clickedNum) {
    increaseScore();
    getNewhit();
    makeBubble();
  }
});

runTimer();
makeBubble();
getNewhit();
//Page buttons
const page1btn = document.querySelector("#Sub1");
const page2btn = document.querySelector("#Sub2");
const page3btn = document.querySelector("#Sub3");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
function hideall() {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
}
page1btn.addEventListener("click", function () {
  hideall();
  page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
  hideall();
  page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
  hideall();
  page3.style.display = "block";
});
hideall();
//All the country buttons
document.addEventListener("DOMContentLoaded", function () {
  const brsbtn = document.querySelector("#Br");
  const brs = document.querySelector("#brs");

  function hideallBrs() {
    brs.style.display = "none";
  }

  brsbtn.addEventListener("click", function () {
    if (brs.style.display === "none") {
      brs.style.display = "block";
    } else {
      brs.style.display = "none";
    }
  });

  hideallBrs();
});
document.addEventListener("DOMContentLoaded", function () {
  const jpsbtn = document.querySelector("#Jp");
  const jps = document.querySelector("#jps");

  function hideallJps() {
    jps.style.display = "none";
  }

  jpsbtn.addEventListener("click", function () {
    if (jps.style.display === "none") {
      jps.style.display = "block";
    } else {
      jps.style.display = "none";
    }
  });

  hideallJps();
});
document.addEventListener("DOMContentLoaded", function () {
  const ussbtn = document.querySelector("#Us");
  const uss = document.querySelector("#uss");

  function hideallUss() {
    uss.style.display = "none";
  }

  ussbtn.addEventListener("click", function () {
    if (uss.style.display === "none") {
      uss.style.display = "block";
    } else {
      uss.style.display = "none";
    }
  });

  hideallUss();
});
document.addEventListener("DOMContentLoaded", function () {
  const uss2btn = document.querySelector("#Us2");
  const uss2 = document.querySelector("#uss2");

  function hideallUss2() {
    uss2.style.display = "none";
  }

  uss2btn.addEventListener("click", function () {
    if (uss2.style.display === "none") {
      uss2.style.display = "block";
    } else {
      uss2.style.display = "none";
    }
  });

  hideallUss2();
});
document.addEventListener("DOMContentLoaded", function () {
  const itsbtn = document.querySelector("#It");
  const its = document.querySelector("#its");

  function hideallIts() {
    its.style.display = "none";
  }

  itsbtn.addEventListener("click", function () {
    if (its.style.display === "none") {
      its.style.display = "block";
    } else {
      its.style.display = "none";
    }
  });

  hideallIts();
});
document.addEventListener("DOMContentLoaded", function () {
  const tusbtn = document.querySelector("#Tu");
  const tus = document.querySelector("#tus");

  function hideallTus() {
    tus.style.display = "none";
  }

  tusbtn.addEventListener("click", function () {
    if (tus.style.display === "none") {
      tus.style.display = "block";
    } else {
      tus.style.display = "none";
    }
  });

  hideallTus();
});
//Background noise
document.addEventListener("DOMContentLoaded", function () {
  const vbAudio = new Audio("audio/vb.mp3");
  vbAudio.volume = 0.6;
  setInterval(function () {
    vbAudio.play();
  }, 3000);
});
//clicking Game
const vb = document.getElementById("vb");
const scoreBox = document.getElementById("scorebox");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let timerStarted = false;
let timerInterval = null;
// Moves the ball randomly every second
function GetRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function MoveVb() {
  vb.style.left = GetRandom(-350, 350) + "px";
  vb.style.top = GetRandom(-350, 150) + "px";
}
let moveVbIntr = setInterval(MoveVb, 1150);

// Increases score when ball is clicked
function vbDig() {
  if (!timerStarted) return;
  score++;
  scoreBox.innerHTML = "Score: " + score;
}

// Starts the countdown timer
function startTimer() {
  timeLeft = 30;
  timerDisplay.innerHTML = "Time: " + timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerHTML = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerStarted = false;
      vb.removeEventListener("click", vbDig);

      const gameOverMsg = document.getElementById("gameOverMsg");
      gameOverMsg.innerHTML = "Game Over! Your final score is: " + score;
    }
  }, 1000);
}

// Start Game Button
startBtn.addEventListener("click", () => {
  if (timerStarted) return;
  timerStarted = true;
  vb.addEventListener("click", vbDig);
  vb.addEventListener("click", MoveVb);
  startTimer();
});
// Reset Button
const resetBtn = document.getElementById("resetBtn");
function resetGame() {
  clearInterval(timerInterval);
  clearInterval(moveVbIntr);
  timerStarted = false;

  timerleft = 30;
  timerdisplay.innerHTML = "Time: " + timerleft;
  score = 0;
  scoreBox.innerHTML = "Score: " + score;
  document.getElementById("gameOverMsg").innerHTML = "";
  vb.style.left = "0px";
  vb.style.top = "0px";
}
resetBtn.addEventListener("click", resetGame);

//quiz
const btnSubmit1 = document.querySelector("#btnSubmit");
const scorebox1 = document.querySelector("#scorebox1");
var q1,
  q2,
  q3,
  q4,
  q5,
  score1 = 0;
function CheckAns() {
  score1 = 0;
  q1 = document.querySelector("input[name='q1']:checked").value;
  console.log(q1);
  if (q1 == "Six") score++;
  q2 = document.querySelector("input[name='q2']:checked").value;
  console.log(q2);
  if (q2 == "Libero") score++;
  q3 = document.querySelector("input[name='q3']:checked").value;
  console.log(q3);
  if (q3 == "No") score++;
  q4 = document.querySelector("input[name='q4']:checked").value;
  console.log(q4);
  if (q4 == "Three") score++;
  q5 = document.querySelector("input[name='q5']:checked").value;
  console.log(q5);
  if (q5 == "Setter") score++;
  scorebox1.innerHTML = "Score:" + score;
}
btnSubmit1.addEventListener("click", CheckAns);
const btnReset = document.querySelector("#btnReset1");
function ResetQuiz() {
  scorebox1.innerHTML = "Score: 0";
  const selectedAnswers = document.querySelectorAll(
    "input[type='radio']:checked"
  );
  selectedAnswers.forEach((radio) => {
    radio.checked = false;
  });
  score1 = 0;
}

btnReset.addEventListener("click", ResetQuiz);
const btnFS = document.querySelector("#btnFS");
const btnWS = document.querySelector("#btnWS");
btnFS.addEventListener("click", enterFullscreen);
btnWS.addEventListener("click", exitFullscreen);
function enterFullscreen() {
  //must be called by user generated event
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
}

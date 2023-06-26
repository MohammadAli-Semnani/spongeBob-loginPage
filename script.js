// IN GOD ,WE TRUST
let $ = document;
let lefteyeImg = $.querySelector("#lefteye");
let righteyeImg = $.querySelector("#righteye");
let userInput = $.querySelector("#userInput");
let passInput = $.querySelector("#passInput");

let leftEyePos = 102;
let rightEyePos = 165;


function setDefault() {
  lefteyeImg.style.top = "75px";
  lefteyeImg.style.left = "110px";

  righteyeImg.style.top = "75px";
  righteyeImg.style.left = "174px";
}

function moveEye(e) {
  if (e.key === "Backspace") {
    lefteyeImg.style.left = `${leftEyePos--}px`;
    righteyeImg.style.left = `${rightEyePos--}px`;
  } else if (leftEyePos > 120 ) {
    return false
  }  else {
    lefteyeImg.style.left = `${leftEyePos++}px`;
    righteyeImg.style.left = `${rightEyePos++}px`;
  }

}

function moveUp() {
  lefteyeImg.style.top = "60px";
  righteyeImg.style.top = "60px";
}

function firstMove() {
      lefteyeImg.style.top = "83px";
      lefteyeImg.style.left = `${leftEyePos}px`;

      righteyeImg.style.top = "83px";
      righteyeImg.style.left = `${rightEyePos}px`;
}


passInput.addEventListener("focus", moveUp);
passInput.addEventListener("blur", setDefault);

userInput.addEventListener("focus", firstMove);
userInput.addEventListener("blur", setDefault);

userInput.addEventListener("keydown", (e) => {
  moveEye(e);
});

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
};

  function moveDodgerRight() {
    const rightNum = dodger.style.left.replace("px", "");
    const right = parseInt(rightNum, 10);

    if(right < 360){
        dodger.style.left = `${right + 1}px`;
    }
};
   

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
   }
    else if (e.key === "ArrowRight"){
        console.log(dodger.style.left)
        moveDodgerRight();
    }
});
  

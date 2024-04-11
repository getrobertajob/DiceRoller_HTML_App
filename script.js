let varDiceID = ["D4", "D6", "D8", "D10", "D12", "D20"];
let varDiceLabel = ["D4Label", "D6Label", "D8Label", "D10Label", "D12Label", "D20Label"];
function roll() {
  let varDiceTotal = 0;
  let varDiceCount = 0;
  let varRandNum = 0;
  for (i = 0; i < varDiceID.length; i++) {
    varDiceCount = document.getElementById(varDiceID[i]).value;
    varDiceCount = Number(varDiceCount);
    if (varDiceCount > 0) {
      for (x = 0; x < varDiceCount; x++) {
        varRandNum = Math.floor(Math.random() * 6) + 1;
        varDiceTotal = varDiceTotal + varRandNum;
      }
    }
  }
  resultBox.innerText = varDiceTotal;
}
let varHighlightIput = document.getElementById(varDiceID[0]);
varHighlightIput.onchange = function (element1) {
  if (varHighlightIput.value > 0) {
    element1.target.style.border = "5px solid red";
    varHighlightLabel = document.body.querySelectorAll("D4Label")
    varHighlightLabel.target.style.border = "5px solid red";
  } else {
    e.target.style.border = "2px solid black";
  }
}; 
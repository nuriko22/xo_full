let counter = 1;
let pole = [[33, 44, 55],
[66, 77, 88],
[99, 10, 11]];
const nums = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const buttons = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9'];
let checkWin = false;
function win() {
  if (checkWin == false){
      // Проверяем горизонтальные линии
      for (let i = 0; i < 3; i++) {
          if (pole[i][0] == pole[i][1] && pole[i][0] == pole[i][2]) {
              for (let j = 0; j < 3; j++){
                  let num = nums[i][j];
                  var col = document.getElementById(buttons[num]);
                  col.classList.add('win');
                  col.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
              }
              checkWin = true;
              return;
          }
      }

      // Проверяем вертикальные линии
      for (let i = 0; i < 3; i++) {
          if (pole[0][i] == pole[1][i] && pole[0][i] == pole[2][i]) {
              for (let j = 0; j < 3; j++){
                  let num = nums[j][i];
                  var col = document.getElementById(buttons[num]);
                  col.classList.add('win');
                  col.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
              }
              checkWin = true;
              return;
          }
      }

      // Проверяем диагонали
      if (pole[0][0] == pole[1][1] && pole[0][0] == pole[2][2]) {
          for (let i = 0; i < 3; i++){
              let num = nums[i][i];
              var col = document.getElementById(buttons[num]);
              col.classList.add('win');
              col.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
          }
          checkWin = true;
          return;
      }
      
      if (pole[0][2] == pole[1][1] && pole[0][2] == pole[2][0]) {
          let j = 2;
          for (let i = 0; i < 3; i++) {
              let num = nums[i][j];
              var col = document.getElementById(buttons[num]);
              col.classList.add('win');
              col.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
              j--;
          }
          checkWin = true;
          return;
      }
  }
}

function butt(a, b, c) {
  if (checkWin == false && pole[b][c] != 2 && pole[b][c] != 1) {
    counter++;
    var x = document.getElementById(buttons[a]);
    let y = 0;
    if (counter % 2 == 0) {
      x.innerHTML = "X";
      y = 1;
    }
    else {
      x.innerHTML = "O";
      y = 2;
    }
    x.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[b][c] = y;
    win();
  }
}

function reset() {
  counter = 1;
  checkWin = false;
  for (let i = 0; i < 9; i++){
    var b = document.getElementById(buttons[i]);
    b.classList.remove('win');
    b.innerHTML = '';
    b.style.backgroundColor = "#76afd6";
    b.style.border = "2px solid #0d152b";
  }
  pole = [[33, 44, 55], [66, 77, 88], [99, 10, 11]];
}

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

function checkWiner() {
    // Проверяем горизонтальные линии
    for (let i = 0; i < 3; i++) {
        if (pole[i][0] == pole[i][1] && pole[i][0] == pole[i][2] && pole[i][1] == pole[i][2]) {
            return true;
        }
    }
    // Проверяем вертикальные линии
    for (let i = 0; i < 3; i++) {
        if (pole[0][i] == pole[1][i] && pole[0][i] == pole[2][i] && pole[1][i] == pole[2][i]) {
            return true;
        }
    }
    // Проверяем диагонали
    if (pole[0][0] == pole[1][1] && pole[0][0] == pole[2][2]) {
        return true;
    }  
    else if (pole[0][2] == pole[1][1] && pole[0][2] == pole[2][0]) {
        return true;
    }
    // Если нет победы, то false
    return false;
}

function bot(){     // Функция для хода компьютера на поле (сложность "легко")
if (counter < 6 && checkWin == false){
    a:
    while (true) {
        // Проверяем, есть ли выигрышный ход для компьютера
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (pole[i][j] > 3) {
                pole[i][j] = 2;             
                if (checkWiner()) {
                  break a;
                }
                else {
                    pole[i][j] = Math.random() * (200 - 30) + 30;
                }
              }
            }
        }
        // Если нет выигрышного хода, блокируем ход игрока, если есть выигрышный ход для него
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (pole[i][j] > 3) {
                    pole[i][j] = 1;             
                    if (checkWiner()) {
                        pole[i][j] = 2;   
                        break a;
                    }
                    else {
                        pole[i][j] = Math.random() * (200 - 30) + 30;
                    }
                }
            }
        }

        // Бот делает первый ход в центр, если он свободен
        if (pole[1][1] != 1 && counter === 2) {
            pole[1][1] = 2;
            break;
        }
        
        // Если центр занят, то бот ходит в любой угл
        if (pole[1][1] == 1 && counter === 2) {
            const x = Math.random() < 0.5 ? 0 : 2;
            const y = Math.random() < 0.5 ? 0 : 2;
            pole[x][y] = 2;
            break;
        }
        
        // Если нет выигрышного или блокирующего хода, делаем случайный ход
        const randomRow = Math.floor(Math.random() * 3);
        const randomCol = Math.floor(Math.random() * 3);
        
        if (pole[randomRow][randomCol] > 3) {
        pole[randomRow][randomCol] = 2;
        break;
        }

    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(pole[i][j] === 2){
                var O = document.getElementById(buttons[nums[i][j]]);
                O.innerHTML = "O";
                O.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
                win();
            }
        }
    }
}
}

function butt(a, b, c) {
    if (checkWin == false && pole[b][c] != 2 && pole[b][c] != 1) {
        counter++;
        var X = document.getElementById(buttons[a]);
        X.innerHTML = "X";
        X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
        pole[b][c] = 1;
        win();
        bot();
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

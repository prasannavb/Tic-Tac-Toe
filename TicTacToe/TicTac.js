    var pos = 0;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var start;
    var win;
    var result = [];

    function calculate() {
      start = 1;
      pos = 0;
      result = [null, null, null, null, null, null, null, null, null];
      document.getElementById(1).innerHTML = "";
      document.getElementById(2).innerHTML = "";
      document.getElementById(3).innerHTML = "";
      document.getElementById(4).innerHTML = "";
      document.getElementById(5).innerHTML = "";
      document.getElementById(6).innerHTML = "";
      document.getElementById(7).innerHTML = "";
      document.getElementById(8).innerHTML = "";
      document.getElementById(9).innerHTML = "";
      document.getElementById("result").innerHTML = ' <i class ="fa-solid fa-x"></i>'+" X's turn";
    }

    function printf(i) {
      if (start == 1) {
        pos++;
        if (pos <= 9) {
          if (pos % 2 == 0) {
            if (result[i - 1] == null) {
              isvalidate(i, "O");
              document.getElementById("result").innerHTML = ' <i class ="fa-solid fa-x"></i>'+" X's turn";
              document.getElementsByClassName("text")[0].style.display = "block";
              document.getElementById(array[i - 1]).innerHTML = "O";
              document.getElementById(array[i - 1]).style.color = "#BFFE00";
              if (pos >= 5) {
                win = "O";
                iswinner(win);
              }
            } else {
              document.getElementById("result").innerHTML = "This tile is already selected" + '  <i class ="fa-solid fa-lock"></i>';
              pos--;
            }
          } else {
            if (result[i - 1] == null) {
              isvalidate(i, "X");
              document.getElementById("result").innerHTML = ' <i class ="fa-solid fa-o"></i>'+" O's turn";
              document.getElementsByClassName("text")[0].style.display = "block";
              document.getElementById(array[i - 1]).innerHTML = "X";
              document.getElementById(array[i - 1]).style.color = "#00FFFF";
              if (pos >= 5) {
                win = "X"
                iswinner(win);
              }
            } else {
              document.getElementById("result").innerHTML = "This tile is already selected" + '<i class="fa-solid fa-lock"></i>';
              pos--;
            }
          }
        }
      } else if (start == 0) {
        document.getElementById("result").innerHTML = ' <i class = "fa-regular fa-hand-pointer"></i>'+" Restart the Game";
      } else {
        document.getElementById("result").innerHTML = ' <i class = "fa-regular fa-hand-pointer"></i>'+" Start the Game";
      }
    }

    function iswinner(win) {
      let box1 = document.getElementById(1).textContent;
      let box2 = document.getElementById(2).textContent;
      let box3 = document.getElementById(3).textContent;
      let box4 = document.getElementById(4).textContent;
      let box5 = document.getElementById(5).textContent;
      let box6 = document.getElementById(6).textContent;
      let box7 = document.getElementById(7).textContent;
      let box8 = document.getElementById(8).textContent;
      let box9 = document.getElementById(9).textContent;
      if (pos <= 9 && (((box1 == box2) && (box1 == box3) && (box1 != "")) || ((box1 == box4) && (box1 == box7) && (box1 != "")) || ((box1 == box5) && (box1 == box9) && (box1 != "")) || ((box2 == box5) && (box2 == box8) && (box2 != "")) || ((box3 == box6) && (box3 == box9) && (box3 != "")) || ((box3 == box5) && (box3 == box7) && (box3 != "")) || ((box4 == box5) && (box4 == box6) && (box4 != "")) || ((box7 == box8) && (box7 == box9) && (box7 != "")))) {
        document.getElementById("result").innerHTML = "Winner is Player:" + win + '  <i class ="fa-solid fa-crown"></i>';
        start = 0;
      } else if (pos == 9) {
        document.getElementById("result").innerHTML = "Hard luck!! Try again" + '<i class ="fa-solid fa-wand-magic-sparkles"></i>';
        start = 0;
      }
    }

    function reset() {
      document.getElementById(1).innerHTML = "";
      document.getElementById(2).innerHTML = "";
      document.getElementById(3).innerHTML = "";
      document.getElementById(4).innerHTML = "";
      document.getElementById(5).innerHTML = "";
      document.getElementById(6).innerHTML = "";
      document.getElementById(7).innerHTML = "";
      document.getElementById(8).innerHTML = "";
      document.getElementById(9).innerHTML = "";
      document.getElementById("result").innerHTML = '  <i class="fa-solid fa-rotate-right"></i>'+" Try again??";
      start = 0;
    }

    function isvalidate(i, ans) {
      if (result[i - 1] == null) {
        result[i - 1] = ans;
      }
    }
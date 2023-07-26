let sign = "x";
  let disp = document.getElementById("player");
  let isko;

  function printx(num) {
    isko = document.getElementById("r" + num);

    if (isko.innerText == "") {
      isko.innerText = sign;
      winner()
      check_sign()
    }
  }

  function check_sign() {
    if (sign == "x") {
      sign = "o"
    } else {
      sign = "x"
    }
  }

  function getbox(no) {
    return document.getElementById("r" + no).innerHTML;
  }

  function check_move(a, b, c, m) {
    if (getbox(a) == m && getbox(b) == m && getbox(c) == m) {
      return true;
    } else {
      return false;
    }
  }

  function winner() {
    if (check_move(1, 2, 3, sign) || check_move(4, 5, 6, sign) || check_move(7,8,9,sign)||check_move(1,4,7,sign)||
    check_move(2,5,8,sign)||check_move(3,6,9,sign)||check_move(1,5,9,sign)||check_move(3,5,7,sign)){
      disp.innerHTML="<center>"+sign+" is winner"+"</center>"
      for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerHTML="";
      }
      
    }else{
      if(getbox(1)!=""&&getbox(2)!=""&&getbox(3)!=""&&getbox(4)!=""&&getbox(5)!=""&&getbox(5)!=""&&getbox(6)!=""&&getbox(7)!=""&&getbox(8)!=""&&getbox(9)!="")
      {
        disp.innerHTML="<center>"+'It\'s a tie'+"</center>"
      }

    }
 }
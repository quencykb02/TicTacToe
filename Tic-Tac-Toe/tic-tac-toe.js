
      var square = document.getElementsByClassName('square');
      for (var dimension1 = 0; dimension1 < square.length; dimension1++) {
          
          square[dimension1].id = [dimension1];
          square[dimension1].addEventListener("click",makeX);
      }
      
      var turn = 'X';
      
      document.getElementById("turn").innerText = 'Player X';
      
      function makeX(){
      
      if (this.innerHTML == 'X'){
      return;
      }
      
      
      if (this.innerHTML == 'O'){
       
          return;
      }
      
      else {
          if (turn == 'O'){
          document.getElementById("turn").innerText = 'Player X';
      }
      
      if (turn == 'X'){
          document.getElementById("turn").innerText = 'Player O';
      }
      document.getElementById(this.id).innerHTML = turn;
      console.log('(1) var turn = '+turn);
      if (turn == 'X'){
          turn ='O';
          console.log('(2) var turn = '+turn);
      }
      
      else {
          turn = 'X';
          console.log('(3) var turn = '+turn);
      }
      
      
      
      }
      
          for (var dimension1 = 0; dimension1 < square.length; dimension1++) {
         
          square[dimension1].id = [dimension1];
          if (
          
          ((document.getElementById(0).innerHTML=='X') && (document.getElementById(1).innerHTML=='X') && (document.getElementById(2).innerHTML=='X')) ||
          ((document.getElementById(3).innerHTML=='X') && (document.getElementById(4).innerHTML=='X') && (document.getElementById(5).innerHTML=='X')) ||
          ((document.getElementById(6).innerHTML=='X') && (document.getElementById(7).innerHTML=='X') && (document.getElementById(8).innerHTML=='X')) ||
          ((document.getElementById(0).innerHTML=='X') && (document.getElementById(3).innerHTML=='X') && (document.getElementById(6).innerHTML=='X')) ||
          ((document.getElementById(1).innerHTML=='X') && (document.getElementById(4).innerHTML=='X') && (document.getElementById(7).innerHTML=='X')) ||
          ((document.getElementById(2).innerHTML=='X') && (document.getElementById(5).innerHTML=='X') && (document.getElementById(8).innerHTML=='X')) ||
          ((document.getElementById(0).innerHTML=='X') && (document.getElementById(4).innerHTML=='X') && (document.getElementById(8).innerHTML=='X')) ||
          ((document.getElementById(2).innerHTML=='X') && (document.getElementById(4).innerHTML=='X') && (document.getElementById(6).innerHTML=='X'))
          
          ){
          
              document.getElementById("winner").innerText ='The winner is X';
              square[dimension1].removeEventListener("click",makeX);    
          }
      
          if (
          
          ((document.getElementById(0).innerHTML=='O') && (document.getElementById(1).innerHTML=='O') && (document.getElementById(2).innerHTML=='O')) ||
          ((document.getElementById(3).innerHTML=='O') && (document.getElementById(4).innerHTML=='O') && (document.getElementById(5).innerHTML=='O')) ||
          ((document.getElementById(6).innerHTML=='O') && (document.getElementById(7).innerHTML=='O') && (document.getElementById(8).innerHTML=='O')) ||
          ((document.getElementById(0).innerHTML=='O') && (document.getElementById(3).innerHTML=='O') && (document.getElementById(6).innerHTML=='O')) ||
          ((document.getElementById(1).innerHTML=='O') && (document.getElementById(4).innerHTML=='O') && (document.getElementById(7).innerHTML=='O')) ||
          ((document.getElementById(2).innerHTML=='O') && (document.getElementById(5).innerHTML=='O') && (document.getElementById(8).innerHTML=='O')) ||
          ((document.getElementById(0).innerHTML=='O') && (document.getElementById(4).innerHTML=='O') && (document.getElementById(8).innerHTML=='O')) ||
          ((document.getElementById(2).innerHTML=='O') && (document.getElementById(4).innerHTML=='O') && (document.getElementById(6).innerHTML=='O'))
          
          ){
          
              document.getElementById("winner").innerText ='The winner is O';
              square[dimension1].removeEventListener("click",makeX);    
          }
      
          }
      
      
    
      }

  

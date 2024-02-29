//For Keyboard Event
document.addEventListener("keypress", (event) =>{
  let key = event.key

  switch(key){
          case "w":
              var crash = new Audio('./sounds/crash.mp3');
              crash.play();
              break;
            case  "a":
              var kickbass = new Audio('./sounds/kick-bass.mp3');
              kickbass.play();
              break;
            case  "s":
              var snare = new Audio('./sounds/snare.mp3');
              snare.play();
              break;
            case  "d":
              var tom1 = new Audio('./sounds/tom-1.mp3');
              tom1.play();
              break;
            case  "j":
              var tom2 = new Audio('./sounds/tom-2.mp3');
              tom2.play();
              break;
            case  "k":
              var tom3 = new Audio('./sounds/tom-3.mp3');
              tom3.play();
              break;
            case  "l":
              var tom4 = new Audio('./sounds/tom-4.mp3');
              tom4.play();
              break;
            default:
              console.log("Invalid Click");
              break;
        }

 
});

//For Mouse Event
document.querySelectorAll(".drum")[0].addEventListener("click", () =>{

      var audio1 = new Audio('./sounds/crash.mp3');
      audio1.play();
    });

document.querySelectorAll(".drum")[1].addEventListener("click", () =>{

    var audio1 = new Audio('./sounds/kick-bass.mp3');
    audio1.play();
  });
  
document.querySelectorAll(".drum")[2].addEventListener("click", () =>{

  var audio1 = new Audio('./sounds/snare.mp3');
  audio1.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click", () =>{

  var audio1 = new Audio('./sounds/tom-1.mp3');
  audio1.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click", () =>{

  var audio1 = new Audio('./sounds/tom-2.mp3');
  audio1.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click", () =>{

  var audio1 = new Audio('./sounds/tom-3.mp3');
  audio1.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click", () =>{

  var audio1 = new Audio('./sounds/tom-4.mp3');
  audio1.play();
});



var noOfDrum = document.querySelectorAll(" .drum").length;
// Using Mouse Click

for (var i = 0; i < noOfDrum; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonName = this.innerHTML;
        makeSound(buttonName);
        buttonAnimation(buttonName);
    });
    
}
// Using Key Press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function to make sound with condition 

function makeSound(key){
    
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
        case "l":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
        default: console.log(key);
    }
}
// Button Animation for Keypress or Click

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }


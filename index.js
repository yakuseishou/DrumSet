let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        let drumInnerHtml = this.innerHTML;
        playsound(drumInnerHtml);
        buttonAnimation(drumInnerHtml);
    });
}

document.addEventListener("keydown", function (e) {
    playsound(e.key);
    buttonAnimation(e.key);
});

function playsound(keyCode) {
    switch (keyCode) {
        case ("w"):
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case ("a"):
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case ("s"):
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case ("d"):
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case ("j"):
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case ("k"):
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case ("l"):
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(keyCode);
    }
}

function buttonAnimation(currentKey) {
    let btnPressed = document.querySelector("." + currentKey);
    btnPressed.classList.add("pressed");
    setTimeout(function () {
        btnPressed.classList.remove("pressed");
    }, 100);
}


/* creating an audio object content the source of audio*/
// let audio = new Audio('sounds/tom-1.mp3');
/*play the audio content in the object*/
// audio.play();
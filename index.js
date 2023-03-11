let noOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHtml = this.textContent;
        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key) {
    switch (key) {
        case "a":
            let clap = new Audio("sounds/clap.wav");
            clap.play();
            break;
        case "s":
            const snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        case "d":
            const kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        case "f":
            const tom = new Audio("sounds/tom.wav");
            tom.play();
            break;
        case "g":
            const hithat = new Audio("sounds/hihat.wav");
            hithat.play();
            break;
        case "h":
            const openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        case "j":
            const ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        case "k":
            const tink = new Audio("sounds/tink.wav");
            tink.play();
            break;
        case "l":
            const boom = new Audio("sounds/boom.wav");
            boom.play();
            break;

        default:
            console.log(buttonInnerHtml);
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

}
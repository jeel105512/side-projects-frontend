const trailer = document.getElementById("trailer")

const animationTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2, // trailer.offsetWidth / 2 and trailer.offsetHeight / 2 to center the mouse trailer when its stopped
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 800, // 800ms
        fill: "forwards" // to prevent default, by default when our animation completes over trailer will revert back to the state it was in prior to the animation's begaining
    });
}

const getTrailerClass = type => {
    switch(type){
        case 'video':
            return "fa-solid fa-play";
        default:
            return "fa-solid fa-arrow-up-right-from-square";
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable");
          interacting = interactable !== null;
    
    const icon = document.getElementById("trailer-icon");

    animationTrailer(e, interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if(interacting){
        icon.className = getTrailerClass(interactable.dataset.type)
    }
}
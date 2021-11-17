window.onload =function() {
    let images = document.querySelectorAll("img");

    for (let image of images) {
        image.addEventListener("click", imageClicked);
    }
}

function imageClicked(event){
    let target = event.currentTarget;

    event.stopPropagation();
    if (target.classList.contains("expanded")) {
        target.classList.remove("expanded");
    }
    else{
        target.classList.add("expanded");
    }
}
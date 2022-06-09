var gridItemVideos = document.getElementsByClassName("grid-item-video");

for (let video of gridItemVideos) {
    video.parentElement.addEventListener("mouseover", function() {
        video.play();
    });
    video.parentElement.addEventListener("mouseleave", function() {
        video.pause();
    });
};

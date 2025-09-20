let sparkles = false;

document.body.addEventListener("click", (e) => {
    sparkles = true
});

setInterval(() => {
    if (sparkles) {
        let sparkle = document.createElement("img");
        sparkle.classList.add("sparkle");
        sparkle.src = "../Assets/sparkles.png";
        sparkle.width = 100 + (Math.random() * 75)
        sparkle.style.position = "absolute";
        sparkle.style.left = "25px"
        sparkle.style.bottom = `-200px`;
        document.body.appendChild(sparkle);
    }
}, 1500);

setInterval(() => {
    if (sparkles) {
        let sparkleList = document.querySelectorAll(".sparkle");
        sparkleList.forEach((sparkle) => {
            sparkle.style.bottom = `${parseFloat(sparkle.style.bottom)+1.5}px`
            sparkle.style.left = `${(Math.sin(parseFloat(sparkle.style.bottom) * 0.01) * 20) + 50}px`
            if (parseFloat(sparkle.style.bottom) > window.innerHeight) {
                sparkle.remove()
            }
        });
    }
}, 10);


setInterval(() => {
    if (sparkles) {
        let sparkle = document.createElement("img");
        sparkle.classList.add("sparkleR");
        sparkle.src = "../Assets/sparkles.png";
        sparkle.width = 100 + (Math.random() * 75)
        sparkle.style.position = "absolute";
        sparkle.style.right = "25px"
        sparkle.style.bottom = "-200px";
        document.body.appendChild(sparkle);
    }
}, 1500);

setInterval(() => {
    if (sparkles) {
        let sparkleList = document.querySelectorAll(".sparkleR");
        sparkleList.forEach((sparkle) => {
            sparkle.style.bottom = `${parseFloat(sparkle.style.bottom)+1.5}px`
            sparkle.style.right = `${(Math.sin(parseFloat(sparkle.style.bottom) * 0.01) * 20) + 50}px`
            if (parseFloat(sparkle.style.bottom) > window.innerHeight) {
                sparkle.remove()
            }
        });
    }
}, 10);
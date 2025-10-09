let lock = false;
let green = false;

document.body.addEventListener("click", (e) => {
    if (green && !lock) {
        let div = document.getElementById("text");
        div.innerHTML = `<div class="flexr"><img src="../Assets/estrogen.png"></div>`
        lock = true;
    } else if (!green) {
        lock = true;
        let div = document.getElementById("text");
        div.innerHTML = `<div class="flexr"><h1>too early :spr_veemo_0:</h1></div>`
    }
});

setTimeout(() => {
    if (!lock) {
        green = true;
        document.body.style.backgroundColor = "#54c472"
    }
}, randInt(4000, 10000))

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
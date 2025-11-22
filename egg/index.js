let egg = document.getElementById("egg");
if (localStorage.getItem("cracked") === null) {
    let went = false;
    egg.addEventListener("click", (e)=>{
        localStorage.setItem("cracked", "true")

        const sound = document.getElementById('scarab');
        if (sound.paused && went == false) {
            sound.play();
            went = true;
        }
    
        egg.style.opacity = 1;
        setInterval(()=>{
            if (egg.style.opacity > 0) {
                egg.style.opacity -= 0.01;
            }
        }, 10);
    })

    egg.style.opacity = 1;
} else {
    egg.remove();
}

let vee = document.getElementById("vee");
vee.style.opacity = 1;
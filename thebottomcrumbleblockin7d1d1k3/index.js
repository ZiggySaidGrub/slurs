let block = document.getElementById("block");
block.addEventListener("click", (e)=>{
    let block = document.getElementById("block");
    block.style.opacity = 1;
    setInterval(()=>{
        let block = document.getElementById("block");
        if (block.style.opacity > 0) {
            block.style.opacity -= 0.02
        }
    }, 10);
})


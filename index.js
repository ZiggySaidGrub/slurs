const request = new XMLHttpRequest();

try {
    request.open("GET", "https://meow.smots.horse:6666");


    request.addEventListener("load", () => {
        document.getElementById("counter").innerHTML = request.response
    });
    request.addEventListener("error", () => {
        document.getElementById("counter").innerHTML = "There was an error"
    });

    request.send();
} catch (error) {
    console.error(`XHR error ${request.status}`);
}
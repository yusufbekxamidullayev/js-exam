

let toggleBtn = document.getElementById("toggle-btn");
let resMenu = document.getElementById("res-menu");

toggleBtn.addEventListener("click", function () {
    resMenu.classList.toggle("translate-y-[-100%]");
});


let loadingScreen = document.getElementById("loading");

window.addEventListener("load", function () {
    loadingScreen.classList.add("hidden")
})


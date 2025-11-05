let profile = document.getElementById("profil");
let profilModal = document.getElementById("profil-modal");
let innerModal = document.getElementById("inner-profil-modal");
let formModal = document.getElementById("form-modal");
let profileImage = document.getElementById("profil-img");
let ism = document.getElementById("profil-name");

function getInfos() {
    let Ism = localStorage.getItem("name") || "Unknown";
    ism.textContent = Ism;
}

getInfos();

profile.addEventListener("click", function () {
    profilModal.classList.remove("hidden");
});

profilModal.addEventListener("click", function (e) {
    profilModal.classList.add("hidden");
});

innerModal.addEventListener("click", function (e) {
    e.stopPropagation();
});

formModal.addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.setItem("name", e.target[0].value);
    localStorage.setItem("imageUrl", e.target[1].value);
    localStorage.setItem("password", e.target[2].value);
    getInfos();
    profilModal.classList.add("hidden");
});
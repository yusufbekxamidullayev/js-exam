let profile = document.getElementById("profile");
let profileModal = document.getElementById("modal");
let innerProfileModal = document.getElementById("inner-modal");
let formModal = document.getElementById("form-modal");
let profileImage = document.getElementById("profile-img");
let profileName = document.getElementById("profile-name");

function showProfileInfo() {
    let info = JSON.parse(localStorage.getItem("infos") || "{}")

    profileImage.src = info.imageUrl;
    profileName.textContent = info.name;
}

showProfileInfo();





profile.addEventListener("click", function () {
    profileModal.classList.remove("hidden")
})

profileModal.addEventListener("click", function () {
    profileModal.classList.add("hidden")
})

innerProfileModal.addEventListener("click", function (e) {
    e.stopPropagation()
})

formModal.addEventListener("submit", function (e) {
    e.preventDefault;
    let infos = {};
    infos.imageUrl = e.target[0].value;
    infos.name = e.target[1].value;
    infos.number = e.target[2].value;
    infos.password = e.target[3].value;


    localStorage.setItem("infos", JSON.stringify(infos));
    showProfileInfo();
    profileModal.classList.add("hidden")

})

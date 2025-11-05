let toggleBtn = document.getElementById("toggle-btn");
let resMenu = document.getElementById("res-menu");

toggleBtn.addEventListener("click", function () {
    resMenu.classList.toggle("translate-y-[-100%]");
});

let loadingScreen = document.getElementById("loading");

window.addEventListener("load", function () {
    loadingScreen.classList.add("hidden")
})

let catalog = document.getElementById("catalog");

categoriesData.map((el) => {
    catalog.innerHTML +=
        `
   <div class = "w-full max-h-[225px] overflow-hidden">
   <a href="../pages/categories.html?name=${el.name}"><div class="cursor-pointer relative h-full w-full overflow-hidden  ">
                        <img class="w-full h-full overflow-hidden object-cover" src=${el.imageUrl} alt="">
                        <div class="absolute h-full w-full overflow-hidden object-cover bottom-0 bg-gradient-to-t from-[#70C05B] h-[70%] hover:from-[#FF6633] hover:h-full duration-600">
                            <p class="absolute bottom-[10px] left-[10px] text-[26px] font-[700] text-[white] ">${el.name}</p>
                        </div></a>
   </div>
                    
                   
    `
});
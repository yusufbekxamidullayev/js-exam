let toggleBtn = document.getElementById("toggleBtn");
let resMenu = document.getElementById("res-menu");
let menu = document.getElementById("menu")
let close = document.getElementById("close");
let search = document.getElementById("search")
let searchCards = document.querySelector(".search-cards")

let loading = document.getElementById("loading")

toggleBtn.addEventListener("click", function () {
    resMenu.classList.toggle("translate-y-[-100%]")
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden")
})


window.addEventListener("load", function () {
    loading.classList.add("hidden")
})

let searchExist = false;
searchExist ? searchCards.classList.remove("hidden") : searchCards.classList.add("hidden");


search.addEventListener("input", function (e) {

    searchCards.innerHTML = "";

    let serachValue = e.target.value;
    let serachProduct = products.filter((el) => el.name.toLowerCase().includes(serachValue.toLowerCase()))



    serachValue ? searchExist = true : searchExist = false;
    searchExist ? searchCards.classList.remove("hidden") : searchCards.classList.add("hidden");

    serachProduct.length === 0 ? searchCards.textContent = "Bunday mahsulot topilmadi.." : serachProduct.map((el) => {
        searchCards.innerHTML += `
            <a href="../pages/product.html?id=${el.id}"
            class="search-card flex gap-[20px] items-center border-[2px] border-[greentellow] rounded-[5px] p-[3px]">
                            <img class="h-[80px] w-[100px] object cover" src=${el.images[0]} alt="">
                            <div>
                                <h1>${el.name}</h1>
                                <p>${el.description}</p>
                            </div>
             </a>
        `
    })
})
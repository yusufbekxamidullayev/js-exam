let searchProduct = document.getElementById("search");
let searchCards = document.querySelector(".search-cards")

let searchExist = false;
searchExist ? searchCards : searchCards.classList.add("hidden");

searchProduct.addEventListener("input", function (e) {
    searchCards.innerHTML = "";
    let searchValue = e.target.value;

    searchValue ? searchExist = true : searchExist = false;
    searchExist ? searchCards.classList.remove("hidden") : searchCards.classList.add("hidden");

    let searchProducts = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))

    searchProducts.length === 0 ? searchCards.innerHTML = "Not found" : searchProducts.map((el) => {
        searchCards.innerHTML +=
            `
   <a href="../pages/product.html?id=${el.id}"><div class="search-card flex w-full items-center py-[3px] gap-[10px]">
                   <img class = "object-cover overflow-hidden rounded-[4px] max-w-[70px] w-full h-[50px]" src="${el.images[1]}" alt="">
                   <div>
                       <h1 class = "font-bold text-[18px]">${el.name}</h1>
                       <p class = "line-clamp-1">${el.description}</p>
                   </div>
               </div></a>
   `
    })

});
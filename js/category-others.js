let categories = document.getElementById("categories");

categoriesData.map((el) => {
    categories.innerHTML +=
        `
        <a class="font-bold" href="../pages/categories.html?name=${el.name}">
        <li class = "flex items-center gap-[10px]">
                <img class ="w-[40px] h-[40px] rounded-full" src=${el.imageUrl}>
                <p>${el.name}</p>
        </li>
        </a>
    `
})
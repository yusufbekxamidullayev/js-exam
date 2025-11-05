let cartCards = document.getElementById("cart-cards");
let carts = JSON.parse(localStorage.getItem("cart") || "[]");
let remove = document.getElementById("remove");
let ids = [];
let allCheck = document.getElementById("all-check");
let checks = document.getElementsByClassName("checks");
let allPrice = document.getElementById("all-price");
let finalPrice = document.getElementById("final-price");

let allDiscounts = document.getElementById("all-discounts");



function getDiscountProducts(content, data) {

    let sum = 0;
    let discounts = 0;
    let finalprice = 0;

    for (let el of data) {
        sum += el.price * el.qty;
        finalprice += el.price * ((100 - el.discount) / 100) * el.qty;
        discounts += (el.price * el.qty * el.discount / 100);
    }


    allPrice.textContent = sum;
    allDiscounts.textContent = discounts.toFixed(1);
    finalPrice.textContent = finalprice.toFixed(1);

    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `
    <div class="flex flex-col sm:flex sm:flex-row gap-[10px] h-full w-full mt-[30px] max-w-[1300px] h-[82px] bg-[white] justify-between rounded-[10px] shadow-md">
                    <div class="flex items-center gap-[10px]">
                        <div class="relative w-[130px] overflow-hidden">
                            <img class="object-cover overflow-hidden rounded-[4px] w-full h-[70px]" src="${el.images[0]}" alt="">
                            <div class="absolute top-[0] w-full">
                                <input onClick = "addToCheck(this , ${el.id})" class="checks w-[20px] h-[20px]"  type="checkbox">
                            </div>

                        </div>
                        <div class="flex flex-col gap-[10px]">
                            <h1 class="line-clamp-1 max-w-[200px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[800px]">${el.description}</h1>
                            <span class="flex gap-[10px]">
                                <h3 class = "whitespace-nowrap">${el.price} ₽</h3>
                                <h1 class="text-[18px] whitespace-nowrap font-[700]">${(el.price * ((100 - el.discount) / 100)).toFixed(1)} ₽</h1>
                                <p class = "whitespace-nowrap">за шт.</p>
                                <p class="text-[white] whitespace-nowrap left-[10px] bottom-[10px] px-[6px] bg-[#FF6633] rounded-[4px]">-${el.discount}%</p>
                            </span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pr-[10px] gap-[20px] lg:gap-[30px] xl:gap-[40px]">
                        <div class="p-[8px] bg-[#70C05B] flex gap-[25px] rounded-[6px]">
                            <button onClick="decreaseBtn(${el.id})" class="cursor-pointer"><img src="../assets/images/minus.svg" alt=""></button>
                            <p id="qty" class="text-[white]">${(carts.find((item) => item.id === el.id)).qty}</p>
                            <button onClick="increaseBtn(${el.id})" class="cursor-pointer"><img src="../assets/images/plus.svg" alt=""></button>
                        </div>
                        <div>
                            <h1 class="text-[18px] whitespace-nowrap font-bold">
                            ${(el.price * ((100 - el.discount) / 100) * el.qty).toFixed(1)}
                            </h1>
                        </div>
                    </div>
                    
                    </div>
    `
    });
}

getDiscountProducts(cartCards, carts);

function increaseBtn(id) {
    let item = carts.find((el) => el.id === id)
    item.qty += 1;
    localStorage.setItem("cart", JSON.stringify(carts));
    getDiscountProducts(cartCards, carts)
}

function decreaseBtn(id) {
    let item = carts.find((el) => el.id === id)
    item.qty -= 1;

    if (item.qty <= 0) {
        carts = carts.filter((el) => el.id !== id)
        badge.textContent = carts.length;
        localStorage.setItem("cart", JSON.stringify(carts));
    }
    getDiscountProducts(cartCards, carts)
}

function addToCheck(value, id) {
    if (value.checked === true) {
        ids.push(id);
    } else if (value.checked === false) {
        ids = ids.filter((el) => el !== id)
    }

}

remove.addEventListener("click", function () {
    carts = carts.filter((el) => !ids.includes(el.id));
    localStorage.setItem("cart", JSON.stringify(carts));
    getDiscountProducts(cartCards, carts);
    badge.textContent = carts.length;
})

allCheck.addEventListener("click", function () {
    if (allCheck.checked === true) {
        for (let el of checks) {
            el.checked = true
        }
        carts.map((el) => {
            ids.push(el.id)
        });
    } else if (allCheck.checked === false) {
        ids = [];
        for (let el of checks) {
            el.checked = false
        }
    }

})
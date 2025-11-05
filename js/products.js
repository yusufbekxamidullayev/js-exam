let productCards = document.querySelector(".cards");
let productFourSliceCards = products.slice(products.length - 12, products.length - 8);
let discountCards = document.querySelector(".dis-cards");

let discountFilterProducts = products.filter((el) => el.discount > 0);
let discountFourSliceProducts = discountFilterProducts.slice(discountFilterProducts.length - 4, discountFilterProducts.length);


let recentProducts = document.querySelector(".recent-products");
let recentFourProducts = products.slice(products.length - 4, products.length);

let badge = document.getElementById("badge");
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let isExist = false;

localStorage.setItem("cart", JSON.stringify(cart));

badge.textContent = cart.length;

function getDiscountProducts(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `
                       <div
                            class="max-w-[350px] w-full bg-white rounded-lg shadow overflow-hidden mt-[30px]">
                            <div class="relative">
                        <a href="../pages/product.html?id=${el.id}">
                             <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[0]}" alt="Молоко Простоквашино" class=" object-cover">
                              <p class="absolute top-5 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">-${el.discount}%</p>
                                <img style="width: 29px; height: 28px;"
                                    class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                    src="./assets/image/yurak.png" alt="">
                        </div>
                        </a>
    
                            <div class="p-[8px] w-full h-full">
                                <div class="flex justify-between">
                                    <h1 class="text-[18px] font-[700]">${(el.price * ((100 - 6) / 100)).toFixed(2)} ₽</h1>
                                    <h1 class="text-[18px] font-[400] line-through">${el.price} ₽</h1>
    
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                    <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                </div>
                                <p class="pb-[5px] text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
    
                                ${el.rating === 5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 4.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 4 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 3.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 3 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 2.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 2 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 1.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 1 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : ""

            }

                                ${(isExist = cart.find((car) => car.id === el.id))
                ? `<div  class="flex w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B]">
                                       <button onClick="decrease(${el.id})" class="cursor-pointer flex items-center justify-center bg-[#70C05B]  w-full text-[28px] text-[white]">-</button>
                                       <span id="qty" class="cursor-pointer flex items-center justify-center bg-[white] w-full text-[green] text-[24px]">${(cart.find((item) => item.id === el.id)).qty}</span>  
                                       <button onClick="increase(${el.id})" class="cursor-pointer flex items-center justify-center bg-[#70C05B]  w-full text-[28px] text-[white]">+</button>
                                    </div>`
                :
                `<button onClick="addtoCart(${el.id})" 
                                    class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                    корзину</button>`

            }
                                
                                    
                            </div>
        `
    });
}

getDiscountProducts(discountCards, discountFourSliceProducts);

function getProductCards(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `
                        <div
                            class="max-w-[350px] w-full bg-white rounded-lg shadow overflow-hidden mt-[30px]">
                            <div class="relative">
                        <a href="../pages/product.html?id=${el.id}">
                             <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[0]}" alt="Молоко Простоквашино" class=" object-cover">
                              <p class="absolute top-5 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">-${el.discount}%</p>
                                <img style="width: 29px; height: 28px;"
                                    class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                    src="./assets/image/yurak.png" alt="">
                        </div>
                        </a>
    
                            <div class="p-[8px] w-full h-full">
                                <div class="flex justify-between">
                                    <h1 class="text-[18px] font-[700]">${(el.price * ((100 - 6) / 100)).toFixed(2)} ₽</h1>
                                    <h1 class="text-[18px] font-[400] line-through">${el.price} ₽</h1>
    
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                    <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                </div>
                                <p class="pb-[5px] text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
    
                                ${el.rating === 5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 4.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 4 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 3.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 3 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 2.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 2 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 1.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 1 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : ""

            }

                                ${(isExist = cart.find((car) => car.id === el.id))
                ? `<div  class="flex w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B]">
                                       <button onClick="decrease(${el.id})" class="cursor-pointer flex items-center justify-center bg-[#70C05B]  w-full text-[28px] text-[white]">-</button>
                                       <span id="qty" class="cursor-pointer flex items-center justify-center bg-[white] w-full text-[green] text-[24px]">${(cart.find((item) => item.id === el.id)).qty}</span>  
                                       <button onClick="increase(${el.id})" class="cursor-pointer flex items-center justify-center bg-[#70C05B]  w-full text-[28px] text-[white]">+</button>
                                    </div>`
                :
                `<button onClick="addtoCart(${el.id})" 
                                    class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                    корзину</button>`

            }
                                
                                    
                            </div>
        `
    });
}

getProductCards(productCards, productFourSliceCards);

function getRecentProducts(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML +=
            `
                         <div
                            class="max-w-[350px] w-full bg-white rounded-lg shadow overflow-hidden mt-[30px]">
                            <div class="relative">
                        <a href="../pages/product.html?id=${el.id}">
                             <img class="w-full aspect-video object-cover transform hover:scale-110 transition-transform duration-300 ease" src="${el.images[0]}" alt="Молоко Простоквашино" class=" object-cover">
                              <p class="absolute top-5 left-2 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">-${el.discount}%</p>
                                <img style="width: 29px; height: 28px;"
                                    class="absolute top-[12px] right-[12px] p-[4px] rounded-[4px] bg-[#F3F2F1] opacity-[50%] cursor-pointer"
                                    src="./assets/image/yurak.png" alt="">
                        </div>
                        </a>
    
                            <div class="p-[8px] w-full h-full">
                                <div class="flex justify-between">
                                    <h1 class="text-[18px] font-[700]">${(el.price * ((100 - 6) / 100)).toFixed(2)} ₽</h1>
                                    <h1 class="text-[18px] font-[400] line-through">${el.price} ₽</h1>
    
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-[#BFBFBF] text-[12px] font-[400]">С картой</p>
                                    <p class="text-[#BFBFBF] text-[12px] font-[400]">Обычная</p>
                                </div>
                                <p class="pb-[5px] text-[17px] font-[400] font-rubik pt-[5px] pb-[0px] line-clamp-2">${el.description}</p>
    
                                ${el.rating === 5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 4.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 4 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 3.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 3 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 2.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 2 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : el.rating === 1.5 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                    <img src="/assets/image/star-half.png" alt="">
                                </div>` : el.rating === 1 ? `
                                 <div class="flex items-center gap-[3px]">
                                    <img src="/assets/image/star-full.png" alt="">
                                </div>` : ""

            }

                                ${(isExist = cart.find((car) => car.id === el.id))
                ? `<div  class="flex w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B]">
                                       <button onClick="decrease(${el.id})" class="cursor-pointer flex items-center justify-center bg-[#70C05B]  w-full text-[28px] text-[white]">-</button>
                                       <span id="qty" class="cursor-pointer flex items-center justify-center bg-[white] w-full text-[green] text-[24px]">${(cart.find((item) => item.id === el.id)).qty}</span>  
                                       <button onClick="increase(${el.id})" class="cursor-pointer flex items-center justify-center bg-[#70C05B]  w-full text-[28px] text-[white]">+</button>
                                    </div>`
                :
                `<button onClick="addtoCart(${el.id})" 
                                    class="cursor-pointer w-[258px] w-full h-[40px] rounded-[4px] border-[1px] border-[#70C05B] text-[#70C05B] text-[16px] font-[400] font-rubik hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-[white] duration-300">В
                                    корзину</button>`

            }
                                
                                    
                            </div>
        `
    });
}

getRecentProducts(recentProducts, recentFourProducts);

function addtoCart(id) {
    let item = products.find((el) => el.id === id);
    item.qty = 1;
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    badge.textContent = cart.length;
    getDiscountProducts(discountCards, discountFourSliceProducts);
    getDiscountProducts(productCards, productFourSliceCards);
    getRecentProducts(recentProducts, recentFourProducts);
}

function increase(id) {
    let item = cart.find((el) => el.id === id)
    item.qty += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    getDiscountProducts(discountCards, discountFourSliceProducts);
    getDiscountProducts(productCards, productFourSliceCards);
    getRecentProducts(recentProducts, recentFourProducts);
}

function decrease(id) {
    let item = cart.find((el) => el.id === id)
    item.qty -= 1;

    if (item.qty <= 0) {
        cart = cart.filter((el) => el.id !== id)
        badge.textContent = cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    getDiscountProducts(discountCards, discountFourSliceProducts);
    getDiscountProducts(productCards, productFourSliceCards);
    getRecentProducts(recentProducts, recentFourProducts);
}


function likeBtn(id) {
    let item = products.find((el) => el.id === id);
    item.qty = 1;
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    badge.textContent = cart.length;
    getDiscountProducts(discountCards, discountFourSliceProducts);
    getDiscountProducts(productCards, productFourSliceCards);
    getRecentProducts(recentProducts, recentFourProducts);
}

let path = new URLSearchParams(window.location.search);

let Id = path.get("id");

let singleProduct = document.querySelector(".single-products");

let idProduct = products.filter((el) => el.id == Id);

console.log(idProduct);


idProduct.map((el) => {
    singleProduct.innerHTML += `
        <div class="container mx-auto px-3 flex flex-col gap-5">
                <h1 class="text-[18px] md:text-[24px] font-[700] text-[#414141]">${el.description}</h1>
                <div class="flex flex-col gap-10 md:flex-row md:items-center gap-[50px]">
                    <div class="flex items-center gap-2">
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
                        <p>3 отзыва</p>
                    </div>
                    <div class="flex gap-[50px] items-center">
                        <div class="flex gap-2 items-center">
                            <img src="../assets/image/share-2.png" alt="">
                            <p class="text-[12px] font-[400] text-[#606060]">Поделиться</p>
                        </div>
                        <div class="flex gap-2 items-center">
                            <img src="../assets/image/yurak.png" alt="">
                            <p class="text-[12px] font-[400] text-[#606060]">В избраное</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-[40px] md:flex md:flex-row xl:gap-[200px]">
                    <div class="flex flex-col justify-center pr-[10px]  sm:flex-row gap-[20px]">
                            <div class="px-[10px] flex gap-[8px] sm:flex sm:flex-col items-center gap-[5px]">
                                ${el.images.map((el) => {
                                    return ` <img class="w-[70px] sm:w-[120px]  object-cover " src="${el}" alt="">`
                                }).join(" ")
        }
                            </div>   
                            <img class="w-full sm:w-[400px] h-full" src="${el.images[0]}" alt="">
                </div>
                        
                    <div class="max-w-[584px] flex flex-col gap-10">
                        <div class="flex justify-between items-center">
                            <div class="flex flex-col gap-1 items-center">
                            <p class="text-[28px] font-[400] text-[#606060]">${el.price}₽</p>
                            <p class="text-[12px] font-[400] text-[#BFBFBF]">Обычная цена</p>
                            </div>
                            <div class="flex flex-col gap-1 items-center">
                            <p class="text-[36px] font-[700] text-[#414141]">${el.price - el.price * el.discount / 100}₽</p>
                            <p class="text-[12px] font-[400] text-[#BFBFBF]">С картой Северяночки</p>
                            </div>
                        </div>
                        <div class="flex justify-center my-4">
                            <a href="../pages/basket.html" class="bg-[#ff5c00] text-white text-lg font-[600] px-12 py-3 sm:px-16 sm:py-5 rounded-[4px] flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h13.4M7 13L5.4 5M6 19a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"></path>
                            </svg>
                            В корзину
                            </a>
                        </div>
                        <div class="max-w-[584px] font-sans">
                            <div class="flex justify-between bg-[#f5f5f5] px-4 py-2 font-bold">
                            <span>Бренд</span>
                            <span>ПРОСТОКВАШИНО</span>
                            </div>
                            <div class="flex justify-between px-4 py-2">
                            <span>Страна производителя</span>
                            <span class="font-bold">Россия</span>
                            </div>
                            <div class="flex justify-between bg-[#f5f5f5] px-4 py-2">
                            <span>Упаковка</span>
                            <span class="font-bold">180 г</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    `
})


let cartImages = document.getElementById("cart-images");
let mainImage = document.getElementById("main-image");

cartImages.addEventListener("click", function (e) {
    e.target.src && (mainImage.src = e.target.src)
})
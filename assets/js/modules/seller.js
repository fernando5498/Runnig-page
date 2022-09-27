
// Funcion para crear tarjetas de tienda, se use en el home y en store
export function ItemsSeller(lisItems, obejectParent) {

    lisItems.forEach(item=>{
        let CardSeller = document.createElement("div")
        CardSeller.classList.add("item")
        CardSeller.innerHTML = `
                                <div class="CardSellers">
                                    <div class="CardSellers-content">
                                        <div class="CardSellers-img">
                                                        <img src="${item.img}" alt="${item.name}" loading="lazy" />
                                                    </div>
                                            <div class="CardSellers-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                                            <div class="CardSellers-price">${item.price}</div>
                                        </div>
                                        <div class="CardSellers-title">
                                                    <h3 class="CardSellers-title-h">${item.name}</h3>
                                    </div>
                                </div>
        `
        obejectParent.appendChild(CardSeller)
        
    })
}

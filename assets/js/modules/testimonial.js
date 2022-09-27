let CarouselTestimonials = document.getElementById("CarouselTestimonials")
let ItemsInfo = [{
        "name": "Jhon Smith",
        "img": "assets/img/person_3.png"
    },
    {
        "name": "Sam Smith",
        "img": "assets/img/person_3.png"
    },
    {
        "name": "Carlos Smith",
        "img": "assets/img/person_3.png"
    }
]
export function ItemsTestimonials() {

    ItemsInfo.forEach(itemInfo => {
        let item = document.createElement("div")
        item.classList.add("item")
        item.innerHTML = `
            <div class="CardTestimonial">
                <div class="CardTestimonial-content">
                    <div class="CardTestimonial-img">
                        <img src="${itemInfo.img}" alt="${itemInfo.name}" loading="lazy" />
                    </div>
                </div>
                <div class="CardTestimonial-title">
                    <h3 class="CardTestimonial-title-h">${itemInfo.name}</h3>
                </div>
            </div>`
        
        CarouselTestimonials.appendChild(item)
    })
}
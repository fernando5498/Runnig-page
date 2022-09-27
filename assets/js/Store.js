import { ItemsSeller } from "./modules/seller.js"
import { InitHeader } from "./modules/header.js"
import { ItemStore } from "./modules/data.js"

InitHeader()

const ShopingContainer = document.getElementById("Shoping-gallery-container")
ItemsSeller(ItemStore, ShopingContainer)

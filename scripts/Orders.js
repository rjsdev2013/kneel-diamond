import { getOrders, getMetals, getSizes, getStyles, getJewelryType } from "./database.js"


const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const types = getJewelryType()


// Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    })

    const foundSize = sizes.find(
    (size) =>{
        return size.id === order.sizeId
    })
    
    const foundStyle = styles.find(
    (style) =>{
        return style.id === order.styleId
    })

    const foundType = types.find(
    (type) =>{
        return type.id === order.typeId
    })

    let totalCost = foundMetal.price + foundSize.price + foundStyle.price
    
    if(foundType.id === 1) {
        totalCost = totalCost * 2
    }
    if(foundType.id === 2){
        totalCost === totalCost * 4
    }
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} costs ${costString}
    </li>`
}


   //return `<li>
       // Order #${order.id} was placed on ${order.timestamp}
    //</li>`




export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

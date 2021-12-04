import { getStyles, setStyle,getJewelryType, setType } from "./database.js"

const styles = getStyles()
const types = getJewelryType()

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "styles"){
            setStyle(parseInt(event.target.value))
            //window.alert(`style selected is ${event.target.value}`)
        }   
    
        
    }
)

document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "type"){
            setType(parseInt(event.target.value))
            //window.alert(`style selected is ${event.target.value}`)
        }   
    
        
    }
)


export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(
    (style) => {
        return `<li> 
            <input type ="radio" name = "styles" value = "${style.id}" /> 
            ${style.style} 
            </li>`
    }) 


    // Join all of the strings in the array into a single string
    html += listItems.join(" ")

    html += "<ul>"
    return html
}

export const jewelryTypes = () => {
    let html = "<ul>"
    const listItems = types.map(
    (type) => {
        return `<li>
               <input type ="radio" name = "type" value = "${type.id}" />
               ${type.style}
               </li>`
    })

    html += listItems.join(" ")

    html += "</ul>"
    return html
}


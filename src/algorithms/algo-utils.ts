import { subscribe } from "svelte/internal";
import { barAsDivElements, generateRandomHeight } from "../components/bars.svelte";
import { colors } from "../variables/stores";
import { barColorEndSorting, delayEndSorting } from "../variables/variables";
let color:string; 
colors.subscribe(value => {
    color = value; 
}); 

//all bars get yellowgreen after sorting / wieso nicht map()?
export async function endSorting() {
    let barsToSortArray = getBarsWhichArentNull(); 
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barsToSortArray) { 
        bar.style.background = barColorEndSorting; 
        await delay(delayEndSorting); 
    }
}
//all bars get another height and default color 
export function refreshBars() {
    let barsToSortArray = getBarsWhichArentNull(); 
    barsToSortArray.map((bar) => {
            bar.style.height = generateRandomHeight() + "px"; 
            bar.style.background = color; 
    });
}
export function getBarsWhichArentNull():any[] {
    let barsToSortAsArray = []; 
    barAsDivElements.map(bar => {
        if(bar !== null) {
            barsToSortAsArray.push(bar); 
        }
    })
    return barsToSortAsArray; 
}

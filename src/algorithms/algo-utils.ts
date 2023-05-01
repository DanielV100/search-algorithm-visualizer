import { barAsDivElements, generateRandomHeight } from "../components/bars.svelte";
import { colors } from "../variables/stores";
import { barColorEndSorting, delayEndSorting } from "../variables/variables";
let color:string; 
colors.subscribe(value => {
    color = value; 
}); 
//all bars get yellowgreen after sorting / wieso nicht map()?
export async function endSorting() {
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barAsDivElements) { 
        bar.style.background = barColorEndSorting; 
        await delay(delayEndSorting); 
    }
}
//all bars get another height and default color 
export function refreshBars() {
    barAsDivElements.map((bar) => {
        bar.style.height = generateRandomHeight() + "px"; 
        bar.style.background = color; 
    });
}
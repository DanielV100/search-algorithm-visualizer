import { barAsDivElements, generateRandomHeight } from "../modules/bars.svelte";
import { barColor, barColorEndSorting, delayEndSorting } from "../variables/variables";
//all bars get yellowgreen after sorting 
export async function endSorting() {
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barAsDivElements) { 
        bar.style.background = barColorEndSorting; 
        await delay(delayEndSorting); 
    }
}
//all bars get another height and default color 
export function refreshBarsAfterSorting() {
    barAsDivElements.map((bar) => {
        bar.style.height = generateRandomHeight() + "px"; 
        bar.style.background = barColor; 
    }); 
}
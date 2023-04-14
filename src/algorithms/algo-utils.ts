import { barAsDivElements, generateRandomHeight } from "../modules/bars.svelte";
import { barColor, delayEndSorting } from "../variables/variables";
export async function endSorting() {
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barAsDivElements) { 
        bar.style.background = "yellowgreen"; 
        await delay(delayEndSorting); 
    }
}
export function refreshBarsAfterSorting() {
    barAsDivElements.map((bar) => {
        bar.style.height = generateRandomHeight() + "px"; 
        bar.style.background = barColor; 
    }); 
}
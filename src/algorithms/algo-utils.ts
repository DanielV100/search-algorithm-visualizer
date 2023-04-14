import { barAsDivElements } from "../modules/bars.svelte";
import { delayEndSorting } from "../variables/variables";
export async function endSorting() {
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barAsDivElements) { 
        bar.style.background = "yellowgreen"; 
        await delay(delayEndSorting); 
    }
}
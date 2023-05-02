import { barAsDivElements, generateRandomHeight } from "../components/bars.svelte";
import { colors } from "../variables/stores";
import { barColorEndSorting, delayEndSorting } from "../variables/variables";
import { buttonBubbleSort, buttonCreateBars, buttonInsertionSort, buttonSelectionSort } from "../components/buttons.svelte";

let color:string; 
colors.subscribe(value => {
    color = value; 
}); 

//all bars get yellowgreen after sorting / wieso nicht map()?
export async function endSorting() {
    disableOrEnableButtons(false); 
    let barsToSortArray = getBarsWhichArentNull(); 
    const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs));
    for (const bar of barsToSortArray) { 
        bar.style.background = barColorEndSorting; 
        await delay(delayEndSorting); 
    }
}
//all bars get another height and default color 
export function refreshBars() {
    disableOrEnableButtons(true); 
    let barsToSortArray = getBarsWhichArentNull(); 
    barsToSortArray.map((bar) => {
            bar.style.height = generateRandomHeight() + "px"; 
            bar.style.background = color; 
    });
}
//it happens that there are nulls in barAsDivElements - this shouldnt be the case, thats why they get sorted out
export function getBarsWhichArentNull():any[] {
    let barsToSortAsArray:HTMLDivElement[] = []; 
    barAsDivElements.map(bar => {
        if(bar !== null) {
            barsToSortAsArray.push(bar); 
        }
    })
    return barsToSortAsArray; 
}

function disableOrEnableButtons(state:boolean):void {
    buttonCreateBars.disabled = state; 
    buttonBubbleSort.disabled = state; 
    buttonInsertionSort.disabled = state; 
    buttonSelectionSort.disabled = state; 
}

import { barAsDivElements, refreshBarsAfterSorting } from "../modules/bars.svelte";
import { sortingSpeedScrollbar } from "../modules/speedscrollbar.svelte";
import { barColor, barColorWhileSwapping } from "../variables/variables";
import { endSorting } from "./algo-utils";

export async function insertionSort() {
    refreshBarsAfterSorting(); 
    for(let i = 0; i < barAsDivElements.length; i++) {
        let j:number = i; 
        let m:string = barAsDivElements[i].style.height; 
        while(j > 0 && parseInt(barAsDivElements[j-1].style.height) > parseInt(m)) { 
            await new Promise(resolve => setTimeout(resolve, parseInt(sortingSpeedScrollbar.value)));
            barAsDivElements[j].style.height = barAsDivElements[j-1].style.height; 
            barAsDivElements[j].style.background = barColorWhileSwapping; 
            if(j < barAsDivElements.length-1) {
                barAsDivElements[j+1].style.background = barColor; 
            }
            j--; 
        }
        barAsDivElements[j].style.height = m; 
        barAsDivElements[j+1].style.background = barColor; 
    }
    endSorting(); 
}
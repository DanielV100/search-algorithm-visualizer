import { barAsDivElements } from "../components/bars.svelte";
import { sortingSpeedScrollbar } from "../components/speedscrollbar.svelte";
import { barColor } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/variables";
import { endSorting, refreshBarsAfterSorting } from "./algo-utils";

let color:string; 
barColor.subscribe(value => {
    color = value; 
})
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
                barAsDivElements[j+1].style.background = color; 
            }
            j--; 
        }
        barAsDivElements[j].style.height = m; 
        barAsDivElements[j+1].style.background = color; 
    }
    endSorting(); 
}
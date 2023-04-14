import { barAsDivElements } from "../modules/bars.svelte";
import { sortingSpeedScrollbar } from "../modules/speedscrollbar.svelte";
import { barColor, barColorWhileSwapping } from "../variables/variables";
import { endSorting } from "./algo-utils";
 
export async function bubbleSort() {
    let swapped:boolean; 
    do {
        swapped = false; 
        for(let i = 0; i < barAsDivElements.length-1; i++) { 
            const firstBar = barAsDivElements[i]; 
            const secondBar = barAsDivElements[i+1]; 
            const heightFirstBar:string = firstBar.style.height; 
            const heightSecondBar:string = secondBar.style.height; 
            //comparing height of first bar with height of second bar
            if(parseInt(heightFirstBar) > parseInt(heightSecondBar)) {
                //first and second bar swap places
                await new Promise(resolve => setTimeout(resolve, parseInt(sortingSpeedScrollbar.value)));
                secondBar.style.height = heightFirstBar; 
                firstBar.style.height = heightSecondBar; 
                secondBar.style.background = barColorWhileSwapping; 
                firstBar.style.background = barColor; 
                swapped = true; 
            } else {
                //set color of the bars to default which aren't changing 
                barAsDivElements.map((bar) => {
                    bar.style.background = barColor; 
                }); 
            }
        }
     } while(swapped); 
     endSorting(); 
}



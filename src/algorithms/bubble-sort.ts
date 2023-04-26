import { barAsDivElements } from "../components/bars.svelte";
import { sortingSpeedScrollbar } from "../components/speedscrollbar.svelte";
import { barColor } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/variables";
import { endSorting, refreshBarsAfterSorting } from "./algo-utils";

let color:string; 
barColor.subscribe(value => {
    color = value; 
}); 

export async function bubbleSort() {
    refreshBarsAfterSorting();
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
                console.log(secondBar.style.height + " changed with " + firstBar.style.height); 
                secondBar.style.background = barColorWhileSwapping; 
                firstBar.style.background = color; 
                swapped = true; 
            } else {
                //set color of the bars to default which aren't changing 
                barAsDivElements.map((bar) => {
                    bar.style.background = color; 
                }); 
            }
        }
     } while(swapped); 
     endSorting(); 
}



import { barAsDivElements } from "../modules/bars.svelte";
import { barColor, barColorWhileSwapping, sortingSpeed } from "../variables/variables.svelte";
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
                await new Promise(resolve => setTimeout(resolve, parseInt(sortingSpeed.value)));
                secondBar.style.height = heightFirstBar; 
                firstBar.style.height = heightSecondBar; 
                secondBar.style.background = barColorWhileSwapping; 
                firstBar.style.background = barColor; 
                swapped = true; 
            } else {
                barAsDivElements.map((bar) => {
                    bar.style.background = barColor; 
                }); 
            }
        }
     } while(swapped); 
}
import { colors, sortingSpeed } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/stores";
import { endSorting, getBarsWhichArentNull, playSortSound, refreshBars } from "./algo-utils";

let color:string; 
colors.subscribe(value => {
    color = value; 
}); 
let sortSpeed; 
sortingSpeed.subscribe(value => {
    sortSpeed = value; 
}); 
 
//bubble sort --> compare two bars and change position of right and left on if left on is bigger
export async function bubbleSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull(); 
    refreshBars();
    let swapped:boolean; 
    do {
        swapped = false; 
        for(let i = 0; i < barsToSortArray.length-1; i++) { 
            const firstBar:HTMLDivElement = barsToSortArray[i]; 
            const secondBar:HTMLDivElement = barsToSortArray[i+1]; 
            const heightFirstBar:string = firstBar.style.height; 
            const heightSecondBar:string = secondBar.style.height; 
            //comparing height of first bar with height of second bar
            if(parseInt(heightFirstBar) > parseInt(heightSecondBar)) {
                //first and second bar swap places
                secondBar.style.height = heightFirstBar; 
                firstBar.style.height = heightSecondBar; 
                //logging
                console.log(secondBar.style.height + " changed with " + firstBar.style.height); 
                //change bar color to red
                secondBar.style.background = barColorWhileSwapping; 
                firstBar.style.background = color; 
                swapped = true; 
                await new Promise(resolve => setTimeout(resolve, sortSpeed));
            } else {
                //set color of the bars to default which aren't changing 
                barsToSortArray.map((bar) => {
                    bar.style.background = color; 
                }); 
            }
        }
        //end of line --> play sound
        playSortSound(); 
     } while(swapped); 
     endSorting(); 
}



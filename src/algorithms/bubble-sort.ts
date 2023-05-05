import { colors, sortingSpeed } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/variables";
import { endSorting, getBarsWhichArentNull, refreshBars } from "./algo-utils";

let color:string; 
colors.subscribe(value => {
    color = value; 
}); 
let sortSpeed; 
sortingSpeed.subscribe(value => {
    sortSpeed = value; 
}); 
 

export async function bubbleSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull(); 
    refreshBars();
    let swapped:boolean; 
    do {
        swapped = false; 
        for(let i = 0; i < barsToSortArray.length-1; i++) { 
            const firstBar = barsToSortArray[i]; 
            const secondBar = barsToSortArray[i+1]; 
            const heightFirstBar:string = firstBar.style.height; 
            const heightSecondBar:string = secondBar.style.height; 
            //comparing height of first bar with height of second bar
            if(parseInt(heightFirstBar) > parseInt(heightSecondBar)) {
                //first and second bar swap places
                await new Promise(resolve => setTimeout(resolve, sortSpeed));
                secondBar.style.height = heightFirstBar; 
                firstBar.style.height = heightSecondBar; 
                console.log(secondBar.style.height + " changed with " + firstBar.style.height); 
                secondBar.style.background = barColorWhileSwapping; 
                firstBar.style.background = color; 
                swapped = true; 
            } else {
                //set color of the bars to default which aren't changing 
                barsToSortArray.map((bar) => {
                    bar.style.background = color; 
                }); 
            }
        }
     } while(swapped); 
     endSorting(); 
}



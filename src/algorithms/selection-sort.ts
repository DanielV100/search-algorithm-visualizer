import { colors, sortingSpeed } from "../variables/stores";
import { barColorWhileSwapping } from "../variables/variables";
import { endSorting, getBarsWhichArentNull, playSortSound, refreshBars } from "./algo-utils";
let color:string; 
colors.subscribe(value => {
    color = value; 
}); 
let sortSpeed; 
sortingSpeed.subscribe(value => {
    sortSpeed = value; 
}); 

//selection sort --> find the biggest and place it to the end 
export async function selectionSort() {
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull(); 
    refreshBars(); 
    let marker:number = barsToSortArray.length - 1; 
    while(marker >= 0){
        let max:number = 0; 
        for(let i:number = 0; i <= marker; i++){
            barsToSortArray[i].style.background = "blue"; 
            await new Promise(resolve => setTimeout(resolve, sortSpeed));
            if(parseInt(barsToSortArray[i].style.height) > parseInt(barsToSortArray[max].style.height)) {
                max = i; 
                for (let y:number = 0; y < marker; y++) {
                    barsToSortArray[y].style.background = color;
                }
                barsToSortArray[i].style.background = "red"; 
            }
        }
        let temp:string = barsToSortArray[marker].style.height; 
        barsToSortArray[marker].style.height = barsToSortArray[max].style.height; 
        barsToSortArray[max].style.height = temp; 
        barsToSortArray[marker].style.background = "green";
        barsToSortArray[marker].style.transition = "background 1s ease-out";
        barsToSortArray[marker].style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.9)";
        playSortSound(); 
        barsToSortArray[max].style.background = color; 
        for(let x:number = 0; x < barsToSortArray.length; x++) {
            if((x != marker) && (x != max)) {
                barsToSortArray[x].style.background = color; 
            }
        }
        marker--; 
    }
    for (let y:number = 0; y < barsToSortArray.length; y++) {
        barsToSortArray[y].style.background = color;
    }
    endSorting();  
}
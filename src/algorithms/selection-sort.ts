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

//selection sort --> find the heighest and place it to the end 
export async function selectionSort() {
    //getting bars which aren't null
    let barsToSortArray:HTMLDivElement[] = getBarsWhichArentNull(); 
    //refreshing bars when they are sorted 
    refreshBars(); 
    //flags the index of the array where the heighest bar should be 
    let marker:number = barsToSortArray.length - 1; 
    while(marker >= 0){
        let max:number = 0; 
        //searching for the heighest bar
        for(let i:number = 0; i <= marker; i++){
            barsToSortArray[i].style.background = "DarkMagenta"; 
            //found heighest bar --> it gets red
            if(parseInt(barsToSortArray[i].style.height) > parseInt(barsToSortArray[max].style.height)) {
                max = i; 
                //all bars before the marker get the default color 
                for (let y:number = 0; y <= marker; y++) {
                    barsToSortArray[y].style.background = color;
                }
                //here the heighest bar gets red
                barsToSortArray[i].style.background = barColorWhileSwapping; 
            }
            await new Promise(resolve => setTimeout(resolve, sortSpeed));
        }
        //save height of marker bar
        let temp:string = barsToSortArray[marker].style.height; 
        //change marker bar with heighest bar --> marker is now the heighest bar
        barsToSortArray[marker].style.height = barsToSortArray[max].style.height; 
        //swapped bar gets now the height of the marker
        barsToSortArray[max].style.height = temp; 
        barsToSortArray[max].style.background = color;  
        barsToSortArray[marker].style.background = "green";
        barsToSortArray[marker].style.transition = "background 1s ease-out";
        barsToSortArray[marker].style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.9)";
        //playing sound for better visualization 
        playSortSound(); 
        marker--; 
    }
    endSorting();  
}
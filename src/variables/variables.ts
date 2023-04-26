
    //gets color theme from local storage and sets the suitable bar color 
    
    //bars
    let barColorDark:string = "black"; 
    let barColorLight:string = "blueviolet"
    const barColorWhileSwapping:string = "red"; 
    const maxHeight:number = 500;
    const minHeight:number = 50; 
    let numberOfBars:string = "40"; 
    const delayEndSorting:number = 10; 
    const barColorEndSorting:string = "yellowgreen"; 
    //scrollbar
    const scrollbarMin:string = "0";
    const scrollbarMax:string = "150";  
    const scrollbarStep:string = "5.0"; 
    const scrollbarValue:string = "75"; 


function setNumberOfBars(value:string):void{
    numberOfBars = value; 
}


    export { barColorWhileSwapping, scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue, maxHeight, minHeight, numberOfBars, delayEndSorting, barColorEndSorting, barColorDark, barColorLight, setNumberOfBars}; 
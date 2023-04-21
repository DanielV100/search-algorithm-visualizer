    //bars
    let barColor:string =  "blueviolet"; 
    let barColorDark:string = "black"; 
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
    const scrollbarValue:string = "20"; 
    //heading 
    const typewritterSpeed:number = 40; 
    const headingAsString:string = "how sorting works."; 
    const headingBegin:string = "See"; 
    //color theme 
    let isDarkmode:boolean = false; 

    function setIsDarkmode(value:boolean):void {
        isDarkmode = value; 
    }
    function setBarColor(color:string):void {
        barColor = color; 
    }

    export { barColor, barColorWhileSwapping, scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue, typewritterSpeed, headingAsString, maxHeight, minHeight, numberOfBars, delayEndSorting, headingBegin, barColorEndSorting, barColorDark, isDarkmode, setIsDarkmode, setBarColor}; 
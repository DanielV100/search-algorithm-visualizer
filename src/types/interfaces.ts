interface Bar{
    height:number; 
    id:number; 
    ref?:HTMLDivElement
    
}
export interface Bars extends Array<Bar>{}; 

//Buttonfarbe ändert sich nicht korrekt
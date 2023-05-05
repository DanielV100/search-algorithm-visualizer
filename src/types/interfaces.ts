interface Bar{
    height:number; 
    id:number; 
    color:string; 
    ref?:HTMLDivElement
    
}
export interface Bars extends Array<Bar>{}; 

//Buttonfarbe ändert sich nicht korrekt
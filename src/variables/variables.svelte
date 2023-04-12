<script lang="ts" context="module">
    //bars
    const barColor:string =  "BlueViolet"; 
    const barColorWhileSwapping:string = "red"; 
    //scrollbar
    const scrollbarMin:string = "0";
    const scrollbarMax:string = "150";  
    const scrollbarStep:string = "5.0"; 
    const scrollbarValue:string = "20"; 
    //sorting speed 
    let sortingSpeed:HTMLOutputElement; 
    let sortingSpeedScrollbar:HTMLInputElement; 

    export { barColor, barColorWhileSwapping, sortingSpeed }; 

    //speed of swapping bars is changed here 
    function changeSpeed():void {
        sortingSpeed.value = sortingSpeedScrollbar.value; 
    }

</script>
<div>
    <input id="scrollbar" bind:this={sortingSpeedScrollbar} type="range" min={scrollbarMin} max={scrollbarMax} step={scrollbarStep} value={scrollbarValue} on:input={changeSpeed}>
    <output bind:this={sortingSpeed} class="h4">{scrollbarValue}</output>
</div>

<style>
    div{
        margin: 20px;
    }
    #scrollbar {
        margin-right: 10px ;
    }

</style>

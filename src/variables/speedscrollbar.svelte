<script lang="ts" context="module">
  import { scrollbarMax, scrollbarMin, scrollbarStep, scrollbarValue } from "./variables";
    //sorting speed 
    let sortingSpeed:HTMLOutputElement; 
    let sortingSpeedScrollbar:HTMLInputElement; 

    export { sortingSpeed }; 

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

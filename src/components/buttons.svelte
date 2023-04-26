<script lang="ts">
  import { bubbleSort } from "../algorithms/bubble-sort";
  import { insertionSort } from "../algorithms/insertion-sort";
  import { selectionSort } from "../algorithms/selection-sort";
  import { colors } from "../variables/stores";
  import { setNumberOfBars } from "../variables/variables";
  import { generateBars } from "./bars.svelte";
  let buttonColorValue:string; 
  //button color can be changed dynamically - just use buttonColor.update(clor => "{color}"); 
  colors.subscribe(color => {
    buttonColorValue = color; 
  }); 
  function createCertainAmountOfBars():void{
    setNumberOfBars("20");
    generateBars(20);  
  }
</script>

<button class="btn btn-primary" on:click={createCertainAmountOfBars} style="background-color: {buttonColorValue}; border-color: {buttonColorValue};">Create bars</button>
<button class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>
<button class="btn btn-secondary" on:click={insertionSort}>Insertion Sort</button>
<button class="btn btn-secondary" on:click={selectionSort}>Selection Sort</button>

<style>
    button {
      margin: 20px;
    }
</style>
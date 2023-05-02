<script lang="ts" context="module">
  //importing algorithms
  import { bubbleSort } from "../algorithms/bubble-sort";
  import { insertionSort } from "../algorithms/insertion-sort";
  import { selectionSort } from "../algorithms/selection-sort";
  //importing color store 
  import { colors } from "../variables/stores";
  //importing function for generating bars
  import { generateBars } from "./bars.svelte";

  export let buttonCreateBars:HTMLButtonElement = null; 
  export let buttonBubbleSort:HTMLButtonElement = null; 
  export let buttonInsertionSort:HTMLButtonElement = null; 
  export let buttonSelectionSort:HTMLButtonElement = null; 

  //button color can be changed dynamically - just use buttonColor.update(clor => "{color}"); 
  let buttonColorValue:string; 
  colors.subscribe(color => {
    buttonColorValue = color; 
  }); 
  //on click of create bars button (inspiration: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt?retiredLocale=de)
  function createCertainAmountOfBars():void{
    let userInput:string = prompt("Please enter a number:");
    //check if the user entered a valid number
    if (!isNaN(+userInput) && isFinite(+userInput) && userInput !== "" && userInput !== null) {
      generateBars(+userInput);  
    } else if (userInput == null) {
      alert("Process canceled!"); 
    } 
    else {
      alert("Invalid input!"); 
    }
  }
</script>

<button bind:this={buttonCreateBars} class="btn btn-primary" on:click={createCertainAmountOfBars} style="background-color: {buttonColorValue}; border-color: {buttonColorValue};">Create bars</button>
<button bind:this={buttonBubbleSort} class="btn btn-secondary" on:click={bubbleSort}>Bubble Sort</button>
<button bind:this={buttonInsertionSort} class="btn btn-secondary" on:click={insertionSort}>Insertion Sort</button>
<button bind:this={buttonSelectionSort} class="btn btn-secondary" on:click={selectionSort}>Selection Sort</button>


<style>
    button {
      margin: 20px;
    }
</style>
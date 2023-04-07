<script lang="ts">
  import { sayHelloWorld } from "./modules/test.svelte";
  import Test from "./modules/test.svelte";
  
  let name:string = "Test"; 
  let age:number = 19; 
  sayHelloWorld("Test"); 
  const increaseAge = () => {
    age += 1; 
  }
</script>


<main>
  <Test/>
  <h3>Hello World!</h3>
  <p>Name: {age}</p>
  <button on:click={increaseAge}>Increase Age</button>
</main>

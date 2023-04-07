<script lang="ts">
  let name:string = "Test"; 
  let age:number = 19; 

  const increaseAge = () => {
    age += 1; 
  }
</script>


<main>
  <h3>Hello World!</h3>
  <p>Name: {age}</p>
  <button on:click={increaseAge}>Increase Age</button>
</main>

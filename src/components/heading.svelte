<script lang="ts" context="module">
  import { headingAsString, headingBegin, typewritterSpeed } from "../variables/stores";
    let counter:number = 0; 
    function testFunc() {
        console.log("Deleted mouseover")
    }

    export function typewriteHeading():void {
        window.removeEventListener("mouseover", typewriteHeading);
        console.log("Test"); 
        //gets heading element from DOM 
        const headingElement = document.getElementById("typewritterHeading") as HTMLParagraphElement; 
        //adds step by step a letter (this is the so called typewritter effect)
        if(counter < headingAsString.length) {
            headingElement.innerHTML += headingAsString.charAt(counter); 
            counter++; 
            setTimeout(typewriteHeading, typewritterSpeed); 
        }
    }
</script>
<div class="typewritterHeadingContainer">
    <p class="display-3">{headingBegin}</p>
    <p id="typewritterHeading" class="display-3"></p>
</div>

<style>
    p {
        margin: 20px;
    }
    .typewritterHeadingContainer {
        display: flex;
    }
    #typewritterHeading {
        font-weight: 900;
        margin-left: -5px;
    }
</style>
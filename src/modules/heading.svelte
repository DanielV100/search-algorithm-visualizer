<script lang="ts" context="module">
    const headingElement = document.getElementById("typewritterHeading") as HTMLParagraphElement; 
    const headingAsString:string = "how sorting works."; 
    let i:number = 0;
    
    export function typewriteHeading():void {
        if(i < headingAsString.length) {
            document.getElementById("typewritterHeading").innerHTML += headingAsString.charAt(i); 
            i++; 
            setTimeout(typewriteHeading, 40); 
        }
    }
</script>
<div class="typewritterHeadingContainer">
    <p class="display-3">See</p>
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
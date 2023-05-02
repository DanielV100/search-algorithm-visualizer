<script lang="ts" context="module">
    let latitude:string; 
    let longitude:string; 
    let weather:string; 

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeAPICall);
  } else { 
    
  }
}

function makeAPICall(position) {
    latitude = position.coords.latitude; 
    longitude = position.coords.longitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`)
    .then(response => response.json())
    .then(data => {
        weather = data.current_weather.temperature + "°C"; 
        console.log(data.current_weather.temperature)
        document.getElementById("weather").innerHTML = "- made with ❤️ by daniel / current weather: " +weather;
    })
    .catch(error => {
        document.getElementById("weather").innerHTML = "- made with ❤️ by daniel";
    });
}
getLocation(); 
</script>
<footer class="bg-light text-center text-lg-start">
    <div id="weather" class="text-center p-1" style="background-color: rgba(0, 0, 0, 0.15);">
      
    </div>
  </footer>
  
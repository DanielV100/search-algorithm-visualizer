<script lang="ts" context="module">
    let latitude:string; 
    let longitude:string; 
    let weather:string; 
    const d:Date = new Date();
    const date:string = d.getFullYear() + "-" + (+d.getUTCMonth() + 1) + "-" + d.getDate(); 

//try to get current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeAPICall);
  } 
}

//get lat/log and make api call
function makeAPICall(position) {
    latitude = position.coords.latitude; 
    longitude = position.coords.longitude;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`)
    .then(response => response.json())
    .then(data => {
        weather = data.current_weather.temperature + "°C"; 
        console.log(data.current_weather.temperature);
        document.getElementById("weather").innerHTML = "- made with ❤️ by daniel / current temperature: " +weather + " / " + date;
    })
    .catch(error => {
        console.log("weather api call failed!")
    });
}
//init
getLocation(); 
</script>
<footer class="bg-light text-center text-lg-start">
    <div id="weather" class="text-center p-1" style="background-color: rgba(0, 0, 0, 0.15);">
        - made with ❤️ by daniel
    </div>
  </footer>
  
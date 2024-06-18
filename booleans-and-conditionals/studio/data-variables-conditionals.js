// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let mimimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Too many atronauts!");
    preparedForLiftoff = false;
} else {
    console.log("Astronaut count acceptable!");
    preparedForLiftoff = true;
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready"){
        console.log("Astronauts Ready!");
        preparedForLiftoff = true;
} else {
    console.log("Astronauts not Ready!");
    preparedForLiftoff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit){
    console.log("Total Mass Exceeded!");
    preparedForLiftoff = false;
} else {
    console.log("Mass Acceptable!");
    preparedForLiftoff = true;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < maximumFuelTemp && fuelTempCelsius > mimimumFuelTemp){
    console.log("Temps acceptable!");
    preparedForLiftoff = true;
} else {
    console.log("Temps Unacceptable!");
    preparedForLiftoff = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%"){
    console.log("Fuel at 100%");
    preparedForLiftoff = true;
} else {
    console.log("Fuel not Full!");
    preparedForLiftoff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus = "Clear"){
    console.log("Weather is Clear!");
    preparedForLiftoff = true;
} else{
    console.log("Weather not Clear!");
    preparedForLiftoff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCount <= 7 &&
    astronautStatus === "ready" &&
    totalMassKg <= maximumMassLimit &&
    fuelTempCelsius <= -150 &&
    fuelTempCelsius >= 	-300 &&
    fuelLevel === "100%" &&
    weatherStatus === "Clear"
){
    console.log("Cleared for Takeoff!");
} else {
    ("Not Cleared for Takeoff!");
}
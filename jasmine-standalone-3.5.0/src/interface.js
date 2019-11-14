$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.getTemp());
    $('#temperature-up').on('click', function() {
        thermostat.temperatureRaise(1);
        $('#temperature').text(thermostat.getTemp());
    })
    $('#temperature-down').on('click', function() {
        thermostat.temperatureLower(1);
        $('#temperature').text(thermostat.getTemp());
    })
})
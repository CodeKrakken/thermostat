$(document).ready(function() {
    var thermostat = new Thermostat();

    function updateTemperature() {
        $('#temperature').text(thermostat.getTemp());
        $('#temperature').attr('class', thermostat.usageMode());
    } 

    updateTemperature();
    $('#temperature-up').on('click', function() {
        thermostat.temperatureRaise(1);
        updateTemperature();
    })
    $('#temperature-down').on('click', function() {
        thermostat.temperatureLower(1);
        updateTemperature();
    })
    $('#temperature-reset').on('click', function() {
        thermostat.reset();
        updateTemperature();
    })
    $('#powersaveon').on('click', function() {
        thermostat.PSMOn();
        $('#power-saving-status').text('on!!!')
        updateTemperature();
    })
    $('#powersaveoff').on('click', function() {
        thermostat.PSMOff();
        $('#power-saving-status').text('off!!!')
        updateTemperature();
    })
})
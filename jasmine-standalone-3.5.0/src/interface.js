$(document).ready(function() {
    var thermostat = new Thermostat();

    function updateTemperature() {
        $('#temperature').text(thermostat.getTemp());
        $('#temperature').attr('class', thermostat.usageMode());
    }

    function basicScratch() {
        $('audio#basicScratch')[0].play();
    }

    function resetScratch() {
        $('audio#resetScratch')[0].play();
    }

    function thresholdScratch() { 
        $('audio#thresholdScratch')[0].play();
    }

    updateTemperature();
    $('#temperature-up').on('click', function() {
        if (thermostat.temperature === thermostat.MAXIMUM_TEMPERATURE) {
            thresholdScratch(); 
            } else { 
            basicScratch();
        thermostat.temperatureRaise(1);
        updateTemperature(); 
            }           
    })
    $('#temperature-down').on('click', function() {
        basicScratch();
        thermostat.temperatureLower(1);
        updateTemperature();
    })
    $('#temperature-reset').on('click', function() {
        resetScratch();
        thermostat.reset();
        updateTemperature();
    })
    $('#powersave').on('click', function() {
        basicScratch();
        if (thermostat.powerSavingMode === true) {
           thermostat.PSMOff();
           $('#power-saving-status').text('off!!!');
        } else {
        thermostat.PSMOn();
        $('#power-saving-status').text('on!!!');}
        updateTemperature();
    })
    

})
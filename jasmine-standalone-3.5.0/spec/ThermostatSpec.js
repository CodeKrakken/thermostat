'use strict';

describe('Thermostat', function(){

  var thermostat;
    
  beforeEach(function() { thermostat = new Thermostat(); } );

  it('starts at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
  }); 
  
  it('raises the temperature by 1 degree when requested', function(){
      thermostat.temperatureRaise(1);
      expect(thermostat.temperature).toEqual(21);
  });

  it('lowers the temperature by 1 degree when requested', function(){
      thermostat.temperatureLower(1);
      expect(thermostat.temperature).toEqual(19);
  });

  it('refuses to lower the temperature to lower than 10 degrees', function(){
      thermostat.temperatureLower(11);
      expect(thermostat.temperature).toEqual(10);
  });

  it('cannot go above 25 degrees when power saving mode is on', function() {
      thermostat.temperatureRaise(6);
      expect(thermostat.temperature).toEqual(25);  
  });

  it('cannot got above 32 degrees when power saving mode is off', function() {
      thermostat.switchMode(); 
      thermostat.temperatureRaise(13);
      expect(thermostat.temperature).toEqual(32);
  });

  it('it switches power saving mode off', function() {
      thermostat.switchMode();
      expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('resets to 20 degress with a reset', function() {
     thermostat.temperatureRaise(3);
     thermostat.reset();
     expect(thermostat.temperature).toEqual(20); 
  });

  it('it is in low usage if temp is below 18', function() {
      thermostat.temperatureLower(3);
      expect(thermostat.usageMode()).toEqual("low-usage");
  });

  it('is in medium usage if temp is between 18 and 24', function() {
      expect(thermostat.usageMode()).toEqual("medium-usage");
  });

  it('it is high usage if temp is higher than 25', function () {
      thermostat.switchMode();
      thermostat.temperatureRaise(6);
      console.log(thermostat);
      expect(thermostat.usageMode()).toEqual("high-usage");
  });
});

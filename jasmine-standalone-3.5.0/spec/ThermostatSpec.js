describe('Thermostat', function(){
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

  it('refuses to lower the temperature by more than 10 degrees', function(){
      thermostat.temperatureLower(11);
      expect(thermostat.temperature).toEqual(10);
  });

  it('cannot go above 25 degress when power saving mode is on', function() {
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
});

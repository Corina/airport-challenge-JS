describe("Airport", function() {
  var airport;
  var plane;
  
  beforeEach(function() {
    weatherReporter = new WeatherReporter();
    airport = new Airport(5, weatherReporter);
    plane = new Plane();
    spyOn(plane, "land");
  });
  
  describe("when not stormy", function() {
    beforeEach(function() {
      spyOn(weatherReporter, "isStormy").and.returnValue(false);
    });
    
    it("instructs a plane to land", function() {
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
  
  describe("when full", function() {
    it("raises an error", function() {
      [1, 2, 3, 4, 5].forEach(function(i) {
        airport.land(plane);
      });
      expect(function() {
        airport.land(plane);
      }).toThrow(new AirportException("Cannot land plane: airport full"));
    });
  });
  
  describe("when stormy", function() {
    it("raises an error", function() {
      spyOn(weatherReporter, "isStormy").and.returnValue(true);
      expect(function() {
        airport.land(plane);
      }).toThrow(new AirportException("Cannot land plane: weather is stormy"));
    });
  });
});

function AirportException(message) {
  this.name = "AirportException";
  this.message = message;
}

var Airport = function(capacity, weatherReporter) {
  this.capacity = capacity;
  this.weatherReporter = weatherReporter;
  this.planes = [];
};

Airport.prototype.land = function (plane) {
  if (this._isFull()) {
    throw new AirportException("Cannot land plane: airport full");
  }
  if (this.weatherReporter.isStormy()) {
    throw new AirportException("Cannot land plane: weather is stormy");
  }
  plane.land(this);
  this.planes.push(plane);
};


Airport.prototype._isFull = function () {
  return this.planes.length >= this.capacity;
};

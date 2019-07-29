const Elevator = require('./elevator.js');
const person = require('./person')

let elevator1 = new Elevator()
elevator1.update()
elevator1.start()

let luis = new person()
elevator1.call(luis)
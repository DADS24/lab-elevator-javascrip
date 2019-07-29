class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction ="up"
    this.timer =""
    this.waitingList = []
    this.passengers = []
  }

  start() {
    this.timer =setInterval(()=>this.update(),1000)
   }
  stop() {
    clearInterval(this.timer)
   }
  update() { 
    this.log()
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
    if(this.floor == this.MAXFLOOR){
      console.log("Imposiburu!")      
    }else{
      this.floor += 1
    }
    
  }
  floorDown() {
    if(this.floor == 0){
      console.log("Imposiburu! for now");
      
    }else{
      this.floor -= 1
    }
    
   }
  call(person) { 
    this.requests.push(person.originFloor)
    this.waitingList.push(person)
  }
  log() {
    console.log("Direction: " + this.direction + " | Floor: " + this.floor);    
   }
}

module.exports = Elevator;

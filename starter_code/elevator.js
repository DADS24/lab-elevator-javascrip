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
    if(this.requests.length > 0){
      if(this.requests[0] > this.floor){
        this.direction ="up"
        this.floorUp()
      }else if(this.requests[0]< this.floor) {
        this.direction = "down"
        this.floorDown()
      }
      this._passengersEnter()
      this._passengersLeave()
    }
    this.log()
  }
  _passengersEnter() { 
    console.log(this.waitingList)
    this.waitingList.forEach(p =>{
      if(p.originFloor == this.floor){
        this.requests = this.requests.filter(element => element!=this.floor)
        this.requests.push(p.destinationFloor)
        this.passengers.push(p)
        console.log(p.name + " Goes in")
        this.waitingList.shift()
      }
    console.log("requests")
    console.log(this.requests)
    })
  }
  _passengersLeave() { 
    this.passengers.forEach(p =>{
      if(p.destinationFloor == this.floor){
        console.log(p.name + " Goes out");
        
      }
    })
  }
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

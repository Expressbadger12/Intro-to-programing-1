class Illness {
    
    constructor(duration, name, symptoms){
    this.duration = duration;
    this.name = name;
    this.symptoms = symptoms;
    }

    describe(){
    log(name + " lasts " + duration + " days and has the following symptoms: " + symptoms +".");
    }
}

var cold = new Illness(three, cold, symptoms);

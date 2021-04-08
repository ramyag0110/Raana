class Tool{

    constructor(name,version,languages,regions){
        this.name = name;
        this.version = version;
        this.languages= languages;
        this.regions= regions;

    }

    start(){
        console.log(this.name+"is started");


    }
 stop(){
     console.log(this.name+" is stopped");

     }
                
     }

 


let t1= new Tool("selenium",4);
console.log(t1.name);

t1.start()
t1.stop()

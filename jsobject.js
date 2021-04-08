let tool = {
    version:4,
    languages:["java","js","python","ruby","c#"],
    name:"selenium",

    start:function(){
        console.log(this.name+" is started");        
    },
    stop:function(){
        console.log(this.name+" is stopped");        
    }
}

console.log(tool["name"]);
console.log(tool["version"]);

console.log(tool.name);
console.log(tool.version);
console.log(tool.languages);

tool.start()
tool.stop()
//javascript object notation : JSON
//key value combination
//value can be a number, string, boolean, array, object
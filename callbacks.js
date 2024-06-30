//callbacks 

function greet(name, callback){
    console.log(`Hello ${name}`);
    console.log('Hello' + '' + name);
    callback();
}

function goodBye(){
    console.log("Bye");
}

function display(){
    console.log("Display");
}

// greet("Shubhdeep", goodBye);
greet("shubh", display);




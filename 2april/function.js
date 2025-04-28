function time() {


    setTimeout(() => {
        console.log("h");
    }, 1000);

    console.log("2");

    setTimeout(() => {
        console.log("t");
        
    }, 0);

    setTimeout(() => {
        console.log("r");
        
    }, 500);

    setTimeout(() => {
        console.log("b");
        
    }, 200);

    console.log("4");
    
    
}

time();

// Meaning of 0 in setTimeout
// A delay of 0 milliseconds does not mean immediate execution. It means the function will be queued to run as soon as the call stack is clear. In reality, it gets placed in the message queue and waits for all synchronous code to finish first.
// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//new timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // check one: Any pending setTimeout, setInterval, setImmediate?
  // check two: any pending OS tasks? (like a server listening to a port)
  // check three: any pending long running operations? (like FS module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// entire body executes in on 'tick'
while (shouldContinue) {
  //1. node looks at pending timers and sees if any functions are ready to be called (setTimeout, setInterval)
  //2. node looks at pendingOSTasks/pendingOperations and calls relevant callbacks
  //3. pause execution. continue when..
  //- a new pendingOSTask is done
  //- a new pendingOperation is done
  //- a timer is about to complete
  //4. look at pendingTimers. call any setImmediate
  //5. handle any 'close' events (cleanup code)
}

// exit back to terminal

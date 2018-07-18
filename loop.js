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
while (shouldContinue) {}

// exit back to terminal

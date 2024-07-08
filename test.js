const { fork } = require('child_process');

// Function to be executed in the child process
const childTask = (start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(`Child process: ${i}`);
    process.send(i);

  }
  process.send('Child process completed.');
};

// Main function
const runChildProcess = (start, end) => {
  const child = fork(__filename);

  child.on('message', (message) => {
    console.log(`Parent process: ${message}`);
  });

  child.on('close', () => {
    console.log('Child process terminated.');
  });

  child.send({ start, end });
};

// Check if the script is running as the child process
if (process.send) {
  process.on('message', (message) => {
    const { start, end } = message;
    childTask(start, end);
    process.exit();
  });
} else {
  // Run the child process
  const start = 1;
  const end = 5;
  runChildProcess(start, end);
}

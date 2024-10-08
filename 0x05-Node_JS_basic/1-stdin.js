// Display welcome message and prompt for user's name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Capture user input
process.stdin.on('data', (data) => {
  // Output the user's name
  process.stdout.write(`Your name is: ${data.toString()}`);
});

// Detect when the input stream ends (e.g., on Ctrl+D in most terminals)
process.stdin.on('end', () => {
  // Output closing message
  process.stdout.write('This important software is now closing\n');
});

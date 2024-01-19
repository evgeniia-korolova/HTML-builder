const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const myPath = path.join(__dirname, 'text.txt');

// new data to be added/appended - flag a

function writeData(data) {
  fs.writeFile(myPath, data, { flag: 'a' }, () => {});
}

writeData('');

stdout.write(`Hello, Stranger\nType something or press 'Ctrl + C' for exit\n`);
stdin.on('data', (data) => {
  const strData = data.toString().trim();
  if (strData === 'exit') process.exit();
  writeData(data);
});

process.on('exit', () => stdout.write('Goodbye!'));
process.on('SIGINT', () => process.exit());
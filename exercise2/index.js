const { program } = require('commander');
const readline = require('readline');
const fs = require('fs');

const isStrPositiveInteger = (str) => {
  var n = Math.floor(Number(str));
  return n !== Infinity && String(n) === str && n >= 0;
}

program
  .version('1.0.0')
  .description('Exercise 2 - Solution')
  .arguments('<num1> <num2> <num3> <num4> <num5> <num6>')
  .action((num1, num2, num3, num4, num5, num6) => {

    const args = [ num1, num2, num3, num4, num5, num6];

    // Validate
    args.forEach(num => {
      if (!isStrPositiveInteger(num)) {
        console.error('Invalid input: ' + num + ' - Positive integers only.');
        process.exit(1);
      }
    })

    console.log('Menu:');
    console.log('1. Perform subtraction and show output on screen comma separated.');
    console.log('2. Perform multiplication and store result in a JSON file. (output.json)');
    console.log('3. Pick randomly a number and show it on screen.');
    console.log('4. Print sorted (highest to lowest) array/list numbers.');
    console.log('5. Print sorted (lowest to highest) array/list numbers.');


    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('Enter your choice: ', (choice) => {
      switch (parseInt(choice)) {
        case 1:
          // Subtraction
          const resultSubtract = num1 - num2 - num3 - num4 - num5 - num6;
          console.log('Result: ', resultSubtract);
          break;
        case 2:
          // Multiplication
          const resultMultiply = num1 * num2 * num3 * num4 * num5 * num6;

          const jsonData =  {
            "InputNumber1": parseInt(num1), 
            "InputNumber2": parseInt(num2), 
            "InputNumber3": parseInt(num3), 
            "InputNumber4": parseInt(num4), 
            "InputNumber5": parseInt(num5), 
            "InputNumber6": parseInt(num6), 
            "Multiplication": resultMultiply
          };

          const jsonString = JSON.stringify(jsonData, null, 2);
          fs.writeFile('output.json', jsonString, 'utf8', (err) => {
            if (err) {
              console.error('Error writing to file:', err);
              return;
            }
            console.log('output.json file created.');
          });
          break;
        case 3:
          // Random number
          const randomIndex = Math.floor(Math.random() * args.length);
          console.log('Result: ', args[randomIndex]);
          break;
        
        case 4:
          // Sort descending
          const sortDescResult = args.map(num => parseInt(num)).sort((a, b) => (b-a))
          console.log('Result: ', sortDescResult);
          break;

        case 5:
          // Sort ascending
          const sortAscResult = args.map(num => parseInt(num)).sort((a, b) => (a-b))
          console.log('Result: ', sortAscResult);
          break;
        default:
          console.log('Invalid choice');
      }
      rl.close();
    });
  });

program.parse(process.argv);
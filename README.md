# Exercises


## Exercise 1 
Create a deployment package and manifest on files that are removed/added based from a git diff
. 
### Pre-requisites
- NodeJS  (tested on v20.11.1)

### How to run script
- Run `cd exercise1` and `node create-package.js`
- The script will output the following:
* /deployPackage
  * /added
    * [added files]
  * /removed
    * [removed files]
* added.txt
* removed.txt


## Exercise 2
Create a CLI

### Pre-requisites
- NodeJS (tested on v20.11.1)
- NPM (tested on 10.2.4)
- CommanderJS (^12.0.0)

### How to run  the CLI
- Run `cd exercise2`
- Install dependencies `npm i`
- Run `node index.js <num1> <num2> <num3> <num4> <num5> <num6>`, where num1 to num6 are positive integers.
- The CLI will have the following menu:
  
1. Perform subtraction and show output on screen comma separated.
2. Perform multiplication and store result in a JSON file. (output.json)
3. Pick randomly a number and show it on screen.
4. Print sorted (highest to lowest) array/list numbers.
5. Print sorted (lowest to highest) array/list numbers.

- Option #3 will generate a JSON file output.json on the same directory.


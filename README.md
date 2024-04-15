# Exercises


## Exercise 1 
Creates a deployment package and manifest on files that are removed/added based from a git diff
. 
### Pre-requisites
- NodeJS  (tested on v20.11.1)

### How to run script
- Run `cd exercise1` and `node create-package.js`
- The script will output the following:
|-- /deployPackage
|----|-- /added
|----|---- [added files]
|----|-- /removed
|----|---- [removed files]
|-- added.txt
|-- removed.txt





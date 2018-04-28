# nodeWars
NodeJs simple CMD Application w/ swapi-node API

MGLT Analysis Corp is the best corporation in the galaxy when we're talking about select the properly spaceship for your travels! With nodeWars you'll be able to get information about all the spaceships on our database. Giving the distance in MegaLights, we'll be able to provide how many stops would be necessary to reach your destination.
NodeWars uses the [SWAPI](https://swapi.co/) API database and [swapi-node](https://github.com/salty-pig/swapi-node) API to handle the requests and the power of Node.js(and the Force, of course).

# Installation
## Prerequisites
- [NodeJs](https://nodejs.org/)

```
npm install
```
**PS: Since the swapi-node API has a little defect on the BASE_URL var, you'll need to adjust yourself the swapi-node.js file at ../node_modules/swapi-node/lib/ to be able to use it properly**
```
const BASE_URL = 'https://swapi.co/api/';
```

# Usage
To run the application simply run CMD at the project folder and execute the command
```
$ node nodeWars.js checkMGLT
```
or 
```
$ node nodeWars.js c
```
# Limitations
This software only is able to calculate with positive numbers. Any other type of input will not pull the request. 

# Running Test
nodeWars uses [Jest](https://facebook.github.io/jest/) to run the unit tests.
On application folder, run the command 
```
$ yarn test
```

# Authors
- [Felipe Rybakovas](http://rybakovas.me)
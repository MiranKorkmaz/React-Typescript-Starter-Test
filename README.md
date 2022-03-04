# Pablos Sportsbar
## Fake api management test (React, Typescript and api management)

This is a test made by FrontEdge IT to be used in the recruitment process to the company. The aim is to determine the skills within React, Typescript and api management.

Make sure to read the instructions carefully before starting.

## The Scenario
Our client "Pablos Sportsbar" has only one TV and their customers are constantly arguing over what sport to watch on it. Therefore Pablo has asked you to develop an application that lets the customer delete the sports that he/she don't want to watch, so that Pablo knows which sport most people likes to watch. And while we're at it, the Sports Bar customers should also be able to delete the food that they prefer not to see on our menu.

Our Client just want a POC (Proof of concept) so your job is to create a suggestion for the client on how this page might look and work from an end-user view.

![food](./public/assets/food_for_readme.jpg)

## Instructions
  - In this test you are supposed to create two screens (dishes and sports) which you can navigate between using react-router-dom.
  - On each screen you are supposed to display either the dishes or sports in cards, which means that you have to load the data from db.json.
  - On each card you are also supposed to have a delete button to remove the specific card, which should then be removed from db.json.

## Get started
  - Fork and clone the repo
  - Make sure to setup a .env file with the information from .example.env.
  - Run `yarn install` to install all node_modules. 
  - **Do not use npm, use yarn when installing possible external package and when running install, we don't want to mix yarn.lock and package-lock.json**
  - Run `yarn start` to run the application.
  - Run `yarn start-db` to start the json server.
  - Run `yarn db-refresh` to refresh db.json.
  - Read about json-server here: [json-server](https://www.npmjs.com/package/json-server)

## When done
  - Either give a link to your forked repo or send a zip file to: fredrik.lunde@frontedgeit.se
  - We will then review your pull request
  - If there are any questions, feel free to contact fredrik.lunde@frontedgeit.se

## Advice
  - Don't touch the backupdb.json, it is only supposed to be used with the refresh command seen down below once you start deleting sports/dishes.
  - Put your main focus on setting up and handling the api requests.
  - Make the card as generic as possible so that it can be reused between dishes and sports.
  - Start with setting up routing between screens. Then setup the api calls and abstract them as much as possible. Then load the data into each screen correctly and display it in cards. Lastly add the delete functionality. 

## Aim of the test
  - Setup routing in the header between the two screens (dishes and sports).
  - Setup as generic api calls as possible, using typescript, to fetch all data and delete single entity from db.json (same for dishes and sports - Make the code as reusable as possible). 
  - Once data has been fetched on the related screen. Display all sports or dishes in cards. There should be a delete functionality for each specific dish/sport on the card, removing it from db.json and the screen.
  - Take into account handling loading and errors during the requests. In the utils folder there is a function called asyncDelay which can be used to simulate a real api loading time. This is a bonus if used. 

## What we will judge
  - Your ability to create generic api calls and generic components.
  - How you structure your code and the quality of it. 
  - How you reuse components and split your code.
  - How you use typescript.
  - Styling (more of a bonus).
  - That all data have been used for the dishes/sports in the card, including the image.
  - How you handle async api calls and related possible errors and loading (The styling is not important here, more the functionality, however there is a library for loaders package in package json).
  - How you setup your routing structure to be as scalable as possible.

## Important packages
  - **react-router-dom**: Used to setup routing. [Read more](https://reactrouter.com/web/guides/quick-start)
  - **json-server**: Used for the json-server. [Read more](https://www.npmjs.com/package/json-server)
  - **react-spinners**: Used incase you want to display some good looking spinners when loading data using the asyncDelay. [Read more](https://www.npmjs.com/package/react-spinners)

## External packages
  - You are allowed to bring in external packages if needed. The task can be solved perfectly fine without any additional packages though. 
## When are you finished?
  - Routing between the screens are implemented in the header.
  - You have loaded data, handled loading and error states and displayed the data in the cards on each screen.
  - You have implemented delete functionality on the card for each entity to be able to delete it. 
  - You feel that your code is as structured, clean, reusable and generic as you can achieve. 

## Scripts to be used

In the project directory, you can run the following after you have setup a .env file with same structure as the .example.env file:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-db`

Launches the json-server observing the db.json file within the db folder. 
The json-server will be running on [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn db-refresh`

Use this command to refresh the db.json file with the backupdb.json file. You should never touch the backupdb.json. It is only used to reseed the db.json.

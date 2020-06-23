# React - Typescript - Parcel - Firebase

This repository is a basic setup of a react (16.10.x) application in Typescript, using Parcel to bundle. It uses Prettier and tslint-config-prettier for formatting and linting. Tests are configured using Jest and [react-testing-library](https://github.com/kentcdodds/react-testing-library) 

## Setup
    $ git clone https://github.com/DanAlvares/react-typescript-parcel.git
    $ cd react-typescript-parcel
    $ npm i

### Firebase

Rename `.env-example` to `.env`  
Replace empty strings in `.env` file with config from Firebase project

    $ npm start

Browse to `localhost:1234`  
_The starter app includes auth demos as well as GETTING, ADDING & DELETING data_

## Git - Initial Setup
    $ rm -rf .git
    $ git init
    $ git remote add origin <NEW_APP_REPO_URL.git>
    $ git push -u origin master

## Build the application

    $ npm run build

Output directory is `/dist`. Destination is configurable in the package.json `build` script.
 

## Other

This Project uses a pre-commit hook to format with `prettier` and test the application.  

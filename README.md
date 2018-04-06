# When Am I?

## Current Dev Link
Currently the app lives on a heroku environment but will probably move to custom NodeJS server in the future.  
[Heroku Link](https://naraapi-when.herokuapp.com/)

## Environmental Variables
To tag items in the National Archives Catalog, the game needs a token from a logged in user. There is a log in form which can help achieve this, using environmental variables the token can be saved as a prop during server rendering of the index page. 

To add the environmental variables, the game needs two pieces of information:  
`USERNAME =`  
`PASSWORD =`  

The easiest way to add these is to add a file named `.env` to your development or production environment and add the two lines above with the National Archives username and password.

The `userId` and `credentials` from the opaResponse are saved as props named `loginData: {userName: '', serverToken: ''}` to the App component. 

## Contributing
### Local Setup
1. Clone the repo
1. Navigate to the directory.
1. Run `npm install` to install Next and all the dependencies. 
1. `npm run dev` will run your local development version of the site. 

### Making Updates
1. Make sure you have forked the repo. 
1. Create a new branch, designated by ticket number or the update. 
1. Once updates are made, push to your fork and open a pull request against master. 
1. Repeat :)

## Other Notes
This app makes use of the National Archives catalog api. This means you will need internet access when doing local development to fetch data for the game.  

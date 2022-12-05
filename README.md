# first we create client folder use this command given below and write in the terminal
- npx create-react-app . 
- npm start

# create folder name pages in which create pages file

# CSS in JS (styled-components)
- saves times on the setup
- less lines of css
- speeds up the development
- normalize.css
# " npm install normalize.css "


- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
" npm install styled-components "

- move to public folder and open index.html
- change the project title and icon image
- use favicon icon and open favicon.io

# React Router
- version6
- React Router Docs 
- npm install history@5 react-router-dom@6
- import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'

# Alert 
- we need to add alert in login page

# Setup Server
- cd..
- npm init -y
- add "type": "module" ---- in script add "start": "nodemon server.js"
- create server.js file
- node server

# npm install express
- import express and store in the app ..server.js

- add folder for error handling 
- we create two file errorhandling and notfound 

- env variable
# npm install dotenv
- dotenv.config()

# npm install mongoose
- create folder db in file connection.js

- create folder model and file user.js in this folder
- npm install validator
- use in email validator

# remove try and catch 
- use express-async-errors

# status-code
- npm install http-status-codes 

# error handling 
- insert error handling function using postman

# HASH Password
- npm install bcryptjs 
- userSchema.pre('save',async function(){
-  const salt=await bycrpt.genSalt(10);
-  })

# create JWT 
- npm install jsonwebtoken
- return jwt.sign({userId:this._id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})

# password hidden
- select:false,

# Front END
# Concurrently
- npm install concurrently --save-dev
 "scripts": {
    "server": "nodemon server.js --ignore client",
    "client":"npm start --prefix client",
    "start":"concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""
  },

# cors Package
- npm install cors
  use in server when you donot use proxy

# proxy
proxy link add in package.json  

# axios
- install at client
- npm install axios
- manage http browser

# morgan 
- tell about error in which routes 
- npm install morgan

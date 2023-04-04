# React CRUD App
This is a simple CRUD app, built with technologies listed below:
* React.js
* Node.js
* TypeScript
* Express
* Axios
* mySQL
* Eslint (airbnb)
* Material UI
* Vite
* Nodemon
* other helper packages such as UniqId, Swiper, Yup, etc...

## System requirements
* [Node.js](https://nodejs.org/en/) v16 or later

To successfully launch this app is required to fill in environment variables. 
See __.env.example__ file in root directory for required variables.

To view app, you must run both server and client apps.
Launch server app first


## Launching Server application
<div style="padding-left: 40px">

### Installation
Open terminal in __./server__ folder and run:

```bash
npm install
```

### Launch
Open terminal in __./server__ folder and run:
```bash
npm start
``` 
</div>

## Launching Client application

<div style="padding-left: 40px">

### Installation
Open terminal in __./client__ folder and run:
```bash
npm install
```

### Launch for development
Open terminal in __./client__ folder and run:
```bash
npm start
```

### Launch for production
Open terminal in __./client__ folder and run:
```bash
npm run build
```
</div>

## How Application works?

This app is simple advert type web page. Here's how it works: 
* You can post adverts after signing up and logging in to your account.
* You can edit or delete your advertisements.
* Logged in Admin can delete or edit any advertisement.
* After logging in user gets token that expires after 1 hour (can be changed in .env file).
* Username, id and token are saved to local storage, and are deleted upon logging out.
* API is using authentication middleware on all API calls except 'GET ONE' and 'GET ALL'.
Token expiration is checked with every API call and error 'Unauthorized' is sent to front end 
if token is expired and user is redirected to login page.
New token is saved to local storage if token was valid with last API call.
* All inputs have basic validation.


## View Code
You can view code in [online GitHub editor](https://github.dev/RaidasE30/React-CRUD).

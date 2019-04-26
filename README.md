# LightMVP Backend
The back end for LightMVP, running on Express and MongoDB.

Mongoose is also bundled but not currently being used.

## Quick Start
Install MongoDB. 
Configure .env file so that `mongoURI` points to the database.

npm install

npm run dev

The API should be accessible at http://localhost:3000/api/ (default port).

## API
### game_data
`GET api/game_data/user/{username}` - Fetch user data from the database.


`POST api/game_data/user/{username}` - Inserts user data into the database, if user already exists, it will overwrite.

From here you should be able to dissect the `recentMatches` object for the data you need.

### Twitch Auth
Your call to action should redirect to `/auth/twitch`.


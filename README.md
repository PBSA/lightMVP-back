# LightMVP Backend

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

The back end for LightMVP, running on Express and MongoDB.

Mongoose is also bundled but not currently being used.

## Quick Start

Install MongoDB.
Configure .env file so that `mongoURI` points to the database.

`npm install`

`npm run dev`

The API should be accessible at http://localhost:3000/api/ (default port).

## API

### game_data

`GET api/game_data/user/{username}` - Fetch user data from the database.

`POST api/game_data/user/{username}` - Inserts user data into the database, if user already exists, it will overwrite.

From here you should be able to dissect the `recentMatches` object for the data you need.

### Twitch Auth

Your call to action should redirect to `/auth/twitch`.

An entry will be created in the collection `user-profile`

## Commits

> If you have run the init script, you can commit via `git cz`.  
> If you have not run the init script, you must commit via `npm run commit`.  
> If you do neither, commit message consistency will be difficult for you.

This repository uses a combination of tools to aid in consistent commit messages. The reason we do this is so we can have dynamic changelog creation and smart semantic versioning based on commits (with the ability to override).

The following tools are used:

1. [commitizen](https://www.npmjs.com/package/commitizen)  
   Used for prompting recommended entries within a commit message to ensure it contains the necessary information.
   - [conventional changelog](https://www.npmjs.com/package/cz-conventional-changelog)  
     - Prompts for conventional changelog standard.
2. [husky](https://www.npmjs.com/package/husky)  
   By using the hooks from this package we intercept commits being made and verify them with commitlint.
   - Prevent bad commits/pushes.
3. [commitlint](https://www.npmjs.com/package/@commitlint/cli)
   - cli
   - [config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
     - rule preset in use

## Releases

This repository uses a [standard version](https://www.npmjs.com/package/standard-version) to aid in version control and release management.

When using standard version to cut a release, there is automated changelog modifitions made based on commit messages.

```csharp
// If you typically use npm version to cut a new release, do this instead:
npm run release
```
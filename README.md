# tasks-api-sails-v-1
Experiences with [Sails framework v1](https://sailsjs.com) application

## Roadmaps

- [ ] Create/Update/Delete/List task.
  - [ ] How to create model ? *In processing*
  - [X] How to define an action?
- [ ] Store data in MongoDB
  - [ ] How to connect to MongoDB?
  - [ ] Compare Waterline with Mongoose?
  - [ ] Get along with Waterline.
- [ ] CRUD user.
- [ ] Seed demo data.
- [ ] Authentication with login/signup.
- [ ] Authorization.
- [ ] File upload. (user avatar)
- [ ] Reset password.
- [ ] Test.

## Library should install

- sails-hook-organics: `npm install sails-hook-organics --save`

## Useful commands

1. `sails generate action user/getUsers` will auto-generate `api/user/get-users.js`
*Note: If change getUsers to getusers will auto-generate api/user/**getusers.js***
2. `sails new tasks-api-sails-v1 --no-frontend` will create project just for API.

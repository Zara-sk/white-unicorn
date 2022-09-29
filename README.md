# Quick dev start

`npm install` ofc

## web scripts

Don't work in browser because of required api is declareted in electron part by providing of context briedge

### `npm run web:client:dev`

Runs the react app for auth page development.
In this case, local env TOKEN should be specified by any request for localhost/login (postman or anything else) and blue-unicorn launched

### `npm run web:login:dev`

Runs the react app for client page development

### `npm run web:build`

Build both 'pages' with multiple entries. Should not to be used :p, use `npm run build` instead.

## desktop scripts

### `npm run desktop:client:dev`

Runs electron app for web instance of client page

### `npm run desktop:login:dev`

Runs electron app for web instance of login page

### `npm run desktop:build`

Same, use `npm run build` instead

## other

### `npm run build`

Build both part of application (electron&react)

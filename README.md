# Quick dev start

`npm install` ofc

## web scripts

Don't work in browser because of required api is declareted in electron part by providing of context briedge

### `npm run web:launcher:dev`

Runs the react app for launcher page development.
In this case, local env TOKEN should be specified by any request for localhost/login (postman or anything else) and blue-unicorn launched

### `npm run web:auth:dev`

Runs the react app for auth page development

### `npm run web:build`

Build both 'pages' with multiple entries. Should not to be used :p, use `npm run build` instead.

## desktop scripts

### `npm run desktop:launcher:dev`

Runs electron app for web instance of launcher page

### `npm run desktop:auth:dev`

Runs electron app for web instance of auth page

### `npm run desktop:build`

Same, use `npm run build` instead

## other

### `npm run build`

Build both part of application (electron&react)

Run needed commands:
```sh
npm install
bower install
```

After that, there are 2 options to run:
## Run development mode

Need to change in app/scripts/services/config.js from 'http://127.0.0.1:3000' to the api server url.

And run:
```sh
grunt serve
```
## Build a production build and run

```sh
grunt build:prod
```
The built version will be in folder: dist

Install http-server by:
```
npm install http-server -g
```

Start server by:
```sh
http-server dist
```

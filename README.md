<h4 align="center"> 
	🚧  Under construction  🚧
</h4>

 * [About](#about)
 * [Features](#features)
 * [Setup](#setup)
    * [Install docker](#docker)
    * [Install eslind](#eslint)
 * [Technologies](#technologies)


<a id="about"></a>
## About

<a id="features"></a>
### Features

- [x] Create car category
- [x] Create car category from file
- [x] List all categories
- [x] Create car specification
- [x] List all specifications
- [ ] Save data on postgree
- [ ] Add user avatar
- [ ] Testing
- [ ] Returning car
- [ ] List all avaible cars
- [ ] Autentication
- [ ] Recover Password
- [ ] Deploy
- [ ] CI/CD

Course NodeJs RockedSeat - Project Rent a car.

<a id="setup"></a>
<h1>Setup</h1>

<h3>Commands</h3>

```bash
yarn init -y
yarn add express
yarn add nodemon -D
yarn add  @types/express -D
yarn add typescript -D
yarn add ts-node-dev -D
yarn add uuid, yarn add @types/uuid -D  // randon ID
yarn add multer → upload files
yarn add @types/multer -D
use fs to read file → native node
yarn add csv-parse
yarn add swagger-ui-express
yarn add @types/swagger-ui-express -D
```

<a id="eslint"></a>
<h3>Eslint</h3>

First install the extension [**Eslint**](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) on **VSCode**

Open setting on VSCode edit codeActionsOnSave to:
```bash
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
Install dependency inside the project
```bash
yarn add eslint --dev
```

setup eslint
```bash
yarn eslint --init
```

Choose these options:
- **How would you like do use Eslint?**
   To check syntax, find problems and enforce code style
- **What type of modules does your project use? **
   Javascript modules (import/export)
- **Which framework does your project use?**
   None of these
-** Does your project use TypeScript?**
   Yes
- **Where does your code run?**
   Node
- **How would you like to define a style for your project?**
   Use a popular style guide
-  **Which style guide do you want to follow?**
   Airbnb
-  **What format do you want your config file to be in?**
   JSON
-  **Would you like to install them now with npm?**
      No ( Because we are using yarn
     
Install the dependencies
```bash
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
```

<h3>Create file .eslintignore on root directory and add</h3>
```json
.js
node_modules
dist
```

Edit** .eslintrc.json**, add inside "dev":
```json
"jest": true
```

Check if the first line is:
 ```json
 "es2020": true
```

Add inside **"extends"**:
```json
"plugin:@typescript-eslint/recommended"
```

Add insede** "plugins"**:
```json
"eslint-plugin-import-helpers"
```

Add inside **"rules"**:
```json
"camelcase": "off",
"import/no-unresolved": "error",
"@typescript-eslint/naming-convention": [
  "error",
  {
    "selector": "interface",
    "format": ["PascalCase"],
    "custom": {
      "regex": "^I[A-Z]",
      "match": true
    }
  }
],
"class-methods-use-this": "off",
"import/prefer-default-export": "off",
"no-shadow": "off",
"no-console": "off",
"no-useless-constructor": "off",
"no-empty-function": "off",
"lines-between-class-members": "off",
"import/extensions": [
  "error",
  "ignorePackages",
  {
    "ts": "never"
  }
],
"import-helpers/order-imports": [
  "warn",
  {
    "newlinesBetween": "always",
    "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
    "alphabetize": { "order": "asc", "ignoreCase": true }
  }
],
"import/no-extraneous-dependencies": [
  "error",
  { "devDependencies": ["**/*.spec.js"] }
]
```

After **"rules"** add:
```json
"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
```

After these steps you need close and reopen the VSCode

<h3>Create file .eslintignore on root directory and add</h3>

```json
.js
node_modules
dist
```

<a id="docker"></a>

## Docker ![docker](https://user-images.githubusercontent.com/24212720/115613120-66623780-a2c2-11eb-8af8-e5abc3a8386e.png)

<h3>Download Docker</h3>

[Docker](https://www.docker.com/products/docker-desktop)

<h3>Useful commands</h3>
List docker running → docker ps
Up docker → docker-compose up
Start docker → docker-compose start
Stop docker → docker stop "container Id"
Remove docker → docker rm "container Id"
Access → decker exec -it "name" /bin/bash → back to code ctrl + D
See last logs → docker logs "name"
Watching the logs → docker logs "name" -f

<h3>Create file .dockerignore on root directory and add</h3>
node_modules
.git
.vscode

<h3>Create file Dockerfile on root directory and add</h3>

```bash
FROM node
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "dev"]
```

<h3>Create image</h3>

```bash
docker build -t "name" .
```

<h3>Run docker compose</h3>

```bash
docker-compose up 
```


<a id="technologies"></a>
<h1> :rocket:Technologies</h1>

- [Csv-parse](https://csv.js.org/parse/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Express](https://expressjs.com/)
- [eslint ](https://eslint.org/)
- [JavaScript](https://www.javascript.com/)
- [Multer](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Swagger](https://swagger.io/docs/open-source-tools/swagger-ui/usage/installation/)
- [Typescript](https://www.typescriptlang.org/)
- [Uuid](https://yarnpkg.com/package/uuid)

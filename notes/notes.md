# Learning notes

## Creating a new plugin

![](images/new-plugin-step-1.png)
![](images/new-plugin-step-2.png)
![](images/new-plugin-step-3.png)
![](images/new-plugin-step-4.png)
![](images/new-plugin-step-5.png)
![](images/new-plugin-step-6.png)

## Environment Assumptions

- node.js is installed
- yarn.js is installed
- Visual Studio Code is installed
- Running in a unix based environment

## Initial Setup

- https://www.figma.com/plugin-docs/setup/

- Remove boilerplate files

  ```bash
  rm README.md code.js
  ```

- Add start script to `package.json`

  ```json
  /* package.json */
  "scripts": {
    "start": "tsc -p tsconfig.json --watch",
    "build": "tsc -p tsconfig.json"
  },
  ```

- Install packages

  ```bash
  yarn install
  ```

- Update the project to move main source out of the project root

  ```json
  /* tsconfig.json */
  {
    "compilerOptions": {
      "outDir": "dist/",
      "target": "es6",
      "lib": ["es6"],
      "typeRoots": ["./node_modules/@types", "./node_modules/@figma"]
    },
    "include": ["src/**/*"]
  }
  ```

  ```json
  /* package.json */
  "main": "dist/main.js",
  ```

  ```json
  /* manifest.json */
  {
    "name": "example",
    "id": "1097222528620279676",
    "api": "1.0.0",
    "main": "dist/main.js",
    "editorType": ["figma"]
  }
  ```

  ```bash
  mkdir src
  mv code.ts src/main.ts
  ```

- Build the project to generate `dist/main.js`

  ```bash
  yarn build
  ```

- Run the plugin
  ![](images/run-plugin.png)

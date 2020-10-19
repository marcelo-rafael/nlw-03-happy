<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.png" />
</h1>



<p align="center">
  <img alt="Author" src="https://img.shields.io/badge/author-Marcelo%20Rafael-informational?style=flat-square">
	
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marcelo-rafael/nlw-03-happy?color=informational">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcelo-rafael/nlw-03-happy?color=informational">
  
  <a href="https://github.com/marcelo-rafael/happy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcelo-rafael/nlw-03-happy?color=informational">
  </a>

  <a href="https://github.com/marcelo-rafael/nlw-03-happy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/marcelo-rafael/nlw-03-happy?color=informational">
  </a>

  <a href="https://github.com/marcelo-rafael/nlw-03-happy/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-informational">
  <a>
   
   <a href="https://github.com/marcelo-rafael/nlw-03-happy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/marcelo-rafael/nlw-03-happy?style=flat-square?color=informational">
  </a>
  
  <a href="https://github.com/marcelo-rafael/nlw-03-happy/stargazers">
    <img alt="Forks" src="https://img.shields.io/github/forks/marcelo-rafael/nlw-03-happy?style=flat-square?color=informational">
  </a>
  
  <a href="https://github.com/marcelo-rafael/nlw-03-happy/stargazers">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/marcelo-rafael/nlw-03-happy?style=flat-square&color=informational">
  </a>
</p>


<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/Home.png" />
</h1>

<h4 align="center"> 
	🚧  Happy ♻️ Finished 🚀 🚧
</h4>



# :pushpin: Table of Contents

* [About](#computer-about)
* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [Author](#closed_book-author)
* [License](#closed_book-license)


<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#layout">Challenge</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#contributors">Contributors</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>
</p>


# :computer: About

Happy is an application that connects people to institutional care homes to make many children's day happier
 💜


Project developed during the **NLW - Next Level Week** offered by
 [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/).
NLW is an online experience with lots of practical content, challenges and hacks where the content is available for a week.

---

# :rocket: Features

- [x] Companies or entities can register on the web platform by sending:
   - [x] an image of the collection point
   - [x] entity name, email and whatsapp
   - [x] and the address so that it can appear on the map
   - [x] in addition to selecting one or more collection items:
     - lamps
     - Batteries
     - papers and cardboard
     - electronic waste
     - organic waste
     - kitchen oil

- [x] Users have access to the mobile application, where they can:
   - [x] browse the map to see the registered institutions
   - [x] contact the entity via E-mail or WhatsApp

---

## 🎨 Layout

The application layout is available on Figma:

<a href="https://www.figma.com/file/Agmnpmo6MxV7C6QyNBUWKR/Happy-Web-(Copy)?node-id=0%3A1">
  <img alt="Made by marcelo-rafael" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/happy .png">  
</p>

---

## 🧠 Challenge

In the following link you can find the guide in Notion regarding the proposed challenges so that you can go the extra mile and further increase this application. There you will also find a guide showing the entire step by step of how to deploy both the backend and the frontend.


- [Desafio Happy 2.0](https://www.notion.so/Vers-o-2-0-do-Happy-c754db7a4d41469e8c2d00fcf75392c4)

---



## 🚀 How it works

This project is divided into three parts:
1. Backend (server folder)
2. Frontend (web folder)
3. Mobile (mobile folder)

Both Frontend and Mobile need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the Backend (server)

```bash

# Clone this repository
$ git clone https://github.com/marcelo-rafael/nlw-01-ecoleta

# Access the project folder cmd/terminal
$ cd nlw-01-ecoleta

# go to the server folder
$ cd server

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev:server

# The server will start at port: 3333 - go to http://localhost:3333

```
<p align="center">
  <a href="https://github.com/marcelo-rafael/nlw-01-ecoleta/blob/master/Insomnia_API_Ecoletajson.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone https://github.com/marcelo-rafael/nlw-01-ecoleta

# Access the project folder in your terminal
$ cd nlw-01-ecoleta

# Go to the Front End application folder
$ cd web

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run start

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Leaflet](https://react-leaflet.js.org/en/)**
-   **[React Leaflet](https://react-leaflet.js.org/)**
-   **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

> See the file  [package.json](https://github.com/marcelo-rafael/nlw-01-ecoleta/blob/master/web/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[SQLite](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Celebrate](https://github.com/arb/celebrate)**
-   **[Joi](https://github.com/hapijs/joi)**

> See the file  [package.json](https://github.com/marcelo-rafael/nlw-01-ecoleta/blob/master/server/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native Maps](https://github.com/react-native-community/react-native-maps)**
-   **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
-   **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> See the file  [package.json](https://github.com/marcelo-rafael/nlw-01-ecoleta/blob/master/mobile/package.json)

---

#### **Utilities**

-   Prototype:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
-   API:  **[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)**  →  **[API de UFs](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)**,  **[API de Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)**
-   Maps:  **[Leaflet](https://react-leaflet.js.org/en/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Commit Conventional:  **[Commitlint](https://github.com/conventional-changelog/commitlint)**
-   API Test:  **[Insomnia](https://insomnia.rest/)**
-   Icons:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**
-   Fonts:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**

---



---

## :tada: Contributing

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
> If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)

---

## Autor

<img  border-radius="50px" src="https://avatars0.githubusercontent.com/u/29902777?s=460&u=61d43667f33a45eb000a2af216e4abeb2d4a6717&v=4" width="100px" alt="Marcelo Rafael Gonçalves"/>

[![Linkedin Badge](https://img.shields.io/badge/-Marcelo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcelo-rafael-gonçalves/)](https://www.linkedin.com/in/marcelo-rafael-gonçalves/) 
[![Gmail Badge](https://img.shields.io/badge/-marcelo.rafael.goncalves@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:marcelo.rafael.goncalves@gmail.com)](mailto:marcelo.rafael.goncalves@gmail.com)

---

# :closed_book: License

This project is under the [MIT](./LICENSE).


Made with love by [Marcelo Rafael](https://github.com/marcelo-rafael) 💜🚀

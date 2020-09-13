<h1 align="center">
    <img alt="Be The Hero" src="web/src/assets/logo.svg" width="250px" /><br>
    <b>Save the day!</b>🦸‍♂️
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/diegomais/be-the-hero?style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/diegomais/be-the-hero?style=for-the-badge">
  <img alt="GitHub license" src="https://img.shields.io/github/license/diegomais/be-the-hero?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/diegomais/be-the-hero?style=for-the-badge">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#seat-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<br>

<p align="center">
  <img alt="Mobile and web" src=".github/be-the-hero.png" width="100%">
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

Extras:

- Main Libs
  - [Express](https://expressjs.com/pt-br/)
  - [KnexJS](http://knexjs.org/)
- Style
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## :computer: Project

**Be The Hero** is a project that aims to connect people interested in helping NGOs with open campaigns.

## :bookmark: Layout

You can view the project layout at this [link](https://www.figma.com/file/sezxxZg03XrIaZvYcfPVPd/Be-The-Hero). Remembering that you will need to have a [Figma](https://www.figma.com) account.

## :seat: Getting started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

#### Setting up the development environment

The project is developed using Git. Git is a free and open source distributed version control system. [Download Git](https://git-scm.com/downloads).

The project can be built with npm or Yarn, so choose one of the approach bellow in case you don't have any installed on your system.

- **npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/).
- **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install).

### Cloning the project

You can obtain the project by running the instruction bellow on your terminal:

`git clone https://github.com/diegomais/be-the-hero.git`

#### Setting up the database

The project uses [PostgreSQL](https://www.postgresql.org).

We recommend use [Docker](https://www.docker.com) to install and run the database above.

1. Install [Docker Desktop](https://www.docker.com/get-started).
2. Start a MongoDB instance:
   `docker run --name be-the-hero-pg -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`

### API

#### Adding environment variables

1. Rename the file `.env.example` on `api` directory to `.env`.
2. Add the PostgreSQL connection settings into `.env` file.

#### Installing dependencies and running the server

Run the instructions bellow inside `api` directory:

1. `npm install`
2. `npm run dev`

or

1. `yarn install`
2. `yarn dev`

### Web

Web application available at [https://diegomais-bethehero.netlify.app](https://diegomais-bethehero.netlify.app).

#### Adding environment variables

1. Rename the file `.env.example` on `web` directory to `.env`.
2. Add the API URL (e.g. `http://localhost:3333`) into `.env` file.

#### Installing dependencies and running the web application

Run the instructions bellow inside `web` directory:

1. `npm install`
2. `npm start`

or

1. `yarn install`
2. `yarn start`

### Mobile

With an Android phone, you can load this project immediately at [https://expo.io/@diegomais/be-the-hero](https://expo.io/@diegomais/be-the-hero).

#### Setting up the development environment

Follow the instructions for Expo CLI available in the official [React Native Documentation](https://reactnative.dev/docs/environment-setup).

#### Adding environment variables

1. Rename the file `environment.example.js` on `mobile` directory to `environment.js`.
2. Add the API URL (e.g. `http://localhost:3333`) into `.env` file.

#### Installing dependencies and running the mobile application

Run the instructions bellow inside `mobile` directory:

1. `npm install`
2. `expo start`

or

1. `yarn install`
2. `expo start`

## :thinking: How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m '[feat](scope) My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for more details.

---

Made with :heart: by [Diego Mais](https://diegomais.github.io/) :wave:.

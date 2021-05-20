<h1 align="center">
    <img alt="Be The Hero" src="assets/logo.svg" width="250px" /><br>
    <b>Save the day!</b>🦸‍♂️
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/diegomais/be-the-hero?style=for-the-badge">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/diegomais/be-the-hero?style=for-the-badge">
  <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/JavaScript%20Style%20Guide-Airbnb-red?style=for-the-badge">
  <img alt="GitHub license" src="https://img.shields.io/github/license/diegomais/be-the-hero?style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/diegomais/be-the-hero?style=for-the-badge">
  <img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/diegomais/be-the-hero/API%20CI?style=for-the-badge">
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
  <img alt="Mobile and web" src="assets/screen-shot.png" width="100%">
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

You will need to install [Git](https://git-scm.com/downloads), [Docker Desktop](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/) before following the instructions below.

### Installation using Docker Compose

The following steps need to be performed inside a terminal window (Windows user may prefer to use the [Windows Terminal](https://aka.ms/windowsterminal) but the Command Prompt will also work).

Clone the repository and build Docker images:

```
git clone https://github.com/diegomais/be-the-hero.git
cd be-the-hero
docker-compose build
```

### Running the services

Use the following command to run all Be The Hero containers (from within the be-the-hero directory):

```
docker-compose up
```

You can now use the API at [http://localhost:3333](http://localhost:3333) and view the Web App in the browser at [http://localhost:3000](http://localhost:3000).

### Mobile

With an Android phone, you can load this project immediately at [https://expo.io/@diegomais/be-the-hero](https://expo.io/@diegomais/be-the-hero).

#### Prerequisites

The project can be built with npm or Yarn, so choose one of the approach bellow in case you don't have any installed on your system.

- **npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/).
- **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install).

#### Setting up the development environment

Follow the instructions for Expo CLI available in the official [Expo Documentation](https://docs.expo.io/get-started/installation/).

#### Adding environment variables

1. Rename the file `environment.example.js` on `mobile` directory to `environment.js`.
2. Add the API URL (e.g. `http://localhost:3333`) into `environment.js` file.

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

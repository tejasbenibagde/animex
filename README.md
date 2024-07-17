# animex

[![npm version](https://img.shields.io/npm/v/animex.svg)](https://www.npmjs.com/package/animex)

# Getting Started

Get started by creating a new [React Project](https://react.dev/).

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Create a React Project

Create a new React project using the [Create React App](https://create-react-app.dev/).

```bash
npx create-react-app my-anime-project
cd my-anime-project
```

Or you can use [Vite](https://vitejs.dev/guide/) to create a react app

```bash
npm create vite@latest my-anime-project --template react
cd my-anime-project
npm install
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run your React Project.

## Install the animeX library

Run the following command in your project directory to install the animeX library

```bash
npm install animex
```

Or, if you prefer using Yarn:

```bash
yarn install animex
```

## Setup your Project

Now, let's set up a simple animation using AnimeX. Open your **src/App.js** or **src/App.tsx** file and replace its contents with the following:

```js title="App.js"
import React from 'react';
import Anime, { anime } from 'animex';

const App = () => {
  const props = {
    scale: [0.1, 0.9],
    autoplay: true,
    direction: 'normal',
    delay: anime.stagger(100),
    translateX: 250,
  };

  return (
    <div className="w-96 p-5 bg-gray-300 flex flex-col gap-2">
      <Anime {...props}>
        <div className="bg-red-200 p-2 w-24">Child 1</div>
        <div className="bg-red-200 p-2 w-24">Child 2</div>
      </Anime>
    </div>
  );
};

export default App;
```

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created React site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

**[`Back to top ⬆️`](#table-of-contents)**

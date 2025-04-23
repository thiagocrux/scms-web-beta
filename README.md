# Syphilis Case Management System - BETA (Web)

Web client of a syphilis case management application made with ReactJS and TypeScript. This is a BETA version developed for a college assignment.

## Technologies

These are some of the tecnologies used in this project:

- `commitlint`: A tool that checks your commits and ensures consistency in version control.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `husky`: A tool for adding Git hooks to automate tasks like linting, testing, or commits in JavaScript/Node.js projects.
- `prettier`: A code formatter.
- `react`: A JavaScript library for building user interfaces or UI components.
- `styled-components`: A library for React and React Native that allows you to use component-level styles in your application.
- `typescript`: A superset of JavaScript that introduces optional static typing, interfaces, enums, and other language features.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/scms-web-beta.git
```

2. Browse to the project folder:

```bash
cd scms-web-beta
```

3. Install dependencies:

```
yarn install
```

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode, enabling faster builds and live-reloading.

  ```bash
  yarn dev
  ```

### Production

- #### `build`

  Compiles the application for production.

  ```bash
  yarn build
  ```

- #### `preview`

  Start the server for production from the compiled files.

  ```bash
  yarn preview
  ```

### Testing

- #### `test`

  Runs all tests using the `jest` framework with a maximum of 50% workers to optimize performance.

  ```bash
  yarn test
  ```

### Code quality

- #### `lint`

  Analyzes your codebase for potential errors and style violations using `eslint`.

  ```bash
  yarn lint
  ```

- #### `lint:fix`

  Run the previous `lint` command but also fix the issues if possible.

  ```bash
  yarn lint:fix
  ```

### Git hooks

- #### `postinstall`

  Automatically configures Git hooks (via `husky`) before each commit.

  ```
  yarn postinstall
  ```

### Utilities

- #### `format`

  Run the prettier CLI and format all the files that match the defined pattern.

  ```
  yarn format
  ```

- #### `commit`

  Open the `commitizen` interactive commit prompt.

  ```
  yarn commit
  ```

## License

[MIT](https://choosealicense.com/licenses/mit/)

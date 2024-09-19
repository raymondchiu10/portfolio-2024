# My Portfolio Website

This is just a showcase of some professional projects I have helped develop.

Link to project: [here](https://raymondchiu-portfolio.netlify.app/).

# How it's made:

Tech used: HTML, CSS, Typescript, React/Vite

Starting with [Vite](https://vitejs.dev) as the framework, I built out a simple website using HTML and [Typescript](https://www.typescriptlang.org), and styled and accounted for responsive design with vanilla [CSS/SCSS](https://sass-lang.com/documentation/syntax/).

-   [swiper](https://swiperjs.com/) for the project screenshot carousel.
-   For routing, the project uses [react-router-dom](https://reactrouter.com/en/main).
-   For online hosting, this project uses [Netlify](https://www.netlify.com/).
-   For development, this project is using [Docker](https://docs.docker.com/).

## ESLint/TSLint configuration

This project uses ESLint as well as TSLint. The configuration is based off of Vite's initial boilerplate. for more information and documentation, go to [https://typescript-eslint.io/getting-started/](https://typescript-eslint.io/users/configs).

## IDE Configuration

This project uses EditorConfig. for documentation, go to [https://editorconfig.org/](https://editorconfig.org/).

## Code Formatting Configuration

This project uses prettier. for documentation, go to [https://prettier.io/](https://prettier.io/docs/en/).

## Testing Suite Configuration

This project uses Vitest. for documentation, go to [https://vitest.dev/](https://vitest.dev/guide/).

Unit tests are placed in the same folder that the file being tested is in. Discuss with other collaborators on either a separate `__tests__` folder or self-contained with the testing component would fit your team.

# Lessons Learned:

Vite is very quick and snappy in comparison to [create-react-app](https://create-react-app.dev/). There is still interesting nuances in setting up the config file in vite, but there are plenty of resources to help implement js modules and the like.

## Running the project

-   install dependencies `npm install`
-   run linter `npm run lint`
-   run testing suite `npm run test`

\*\* this project should be run with `docker-compose up --build`. for more information, read the [README.Docker.md](README.Docker.md), otherwise, run with `npm run dev`.

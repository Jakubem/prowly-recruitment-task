## Prowly recruitment task

[Live demo](https://prowly-recruitment-task.jakubemfoto.pl/)

![demo image](./demo/demo.png)

to set up this project:
- clone this repo,
- run `npm i`,
- run `npm run dev` to start development server with hot reload,
- run `npm run prod` to build ready-to-deploy project to `dist` folder

### Additional notes:
- mock persons are generated via [faker](https://www.npmjs.com/package/faker) library
- although it wasn't specify in the original design, I've added a label to search input, as the `placeholder` is no substitute for label
- font color of job title from the design was replaced to comply with [WCAG Color Contrast Standard](https://www.w3.org/TR/WCAG20/)

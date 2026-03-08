This project was built to catch up from webflow and add new functionality using webpack

I don't want to rely on webflow for everything, so I just bring the static content and add the functionality with webpack.

# Requirements

node 18.19.0

# Spin dev server

- ```js
  npm i
  ```
- bring webflow files into static folder
- copy this to the header folder

```html
<link rel="stylesheet" href="main.css" />
<script defer type="module" src="bundle.js"></script>
```

All js files will be bundled into bundle.js
All css files will be bundled into main.css

We use scss/tailwind and typescript in this project.

You have to import all ts files from index.ts to be bundled into bundle.js

You have to import all scss files from ./src/css/index.scss to be bundled into main.css

## to develop:

```js
npm run start // will start the development server
```

# Build to prod

```js
npm run build // will build the prod
npm run optimize-dist // wil optimize the dist folder
```

# Web development Process

## Relume

- Build mockup using Relume que content and structure.
- Export Relume to Figma.

## Figma

- Build Design using Relume components.
- Choose images, fonts and colors.
- Use Relume components and noted some custom behaviour.

## Webflow

- !Important : Export and compress images before adden them to webflow(webflow will resize images but no compress them).(https://tinypng.com/).
- Add required fonts and colors.
- Bring Relume components to Webflow to recreate the design from figma.
- Customize Relume components to match the design.
- Export the webflow project and bring it to this project.

## Webpack

- Wire up following instructions for dev (Spin dev server).
- Add custom functionality and animations depending on figma designand limitation from webflow.
- Add custom css and js to match the design (usually there is .scss and .ts with same name to easy addition to html).

## Production

- Build the project and optimize the dist folder.
- Deploy the project to the server.

@author ernestoballono@gmail.com

## NGROK

Allow us to point a internet address to our localhost.

- https://ngrok.com/

- ngrok http http://localhost:3000

```js
module.exports = {
  // Other configurations...
  devServer: {
    // ...other dev server options
    allowedHosts: 'all',
  },
};
```

## References

- https://www.youtube.com/watch?v=SQQOawm_vLw

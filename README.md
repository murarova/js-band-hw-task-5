# js-band-hw-task-5

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in
the console.

### `npm run commit`

You'll be prompted to fill in any required fields and your commit messages will
be formatted according to the standards defined by project maintainers.

### `npm run test`

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
Run `npm run test` to start testing your project.

### `npm run lint`

Runs Lint.dev commands from inside your repository

### `npm run build`

Builds the app for production to the `build` folder.<br>

The build is minified and the filenames include the hashes.<br> Your app is
ready to be deployed!

##Project structure

---

```bash
├── fonts
│   ├── Segoe-UI
│   │   ├── Segoe-UI.ttf
│   │   ├── Segoe-UI.woff
│   │   └── Segoe-UI.woff2
│   ├── Segoe-UI-black
│   │   ├── Segoe-UI-black.ttf
│   │   ├── Segoe-UI-black.woff
│   │   └── Segoe-UI-black.woff2
│   ├── Segoe-UI-bold
│   │   ├── Segoe-UI-bold.ttf
│   │   ├── Segoe-UI-bold.woff
│   │   └── Segoe-UI-bold.woff2
│   └── Segoe-UI-semibold
│       ├── Segoe-UI-semibold.ttf
│       ├── Segoe-UI-semibold.woff
│       └── Segoe-UI-semibold.woff2
├── index.html
├── scripts
│   ├── controller.js
│   ├── cost.js
│   ├── index.js
│   ├── model.js
│   ├── services
│   │   ├── event-emitter.js
│   │   ├── factory.js
│   │   └── index.js
│   ├── vehicles
│   │   ├── ship.js
│   │   ├── truck.js
│   │   └── vehicle.js
│   └── view.js
└── styles
    ├── _base.sass
    ├── _fonts.sass
    ├── libs
    │   └── normalize.sass
    ├── _libs.sass
    ├── _main.sass
    ├── main.scss
    ├── _mixins
    │   ├── _font-face.sass
    │   └── _mixins.sass
    ├── page.scss
    ├── style.sass
    └── _vars.sass
```

---

The application has the same functionality as
[js-bang-hw-task-1](https://github.com/murarova/js-band-hw-task-1) with some
**improvement**:

- New transport is created by using Factory Method pattern.
- Local storage have implemented as a Singleton.

Demo: [GitHub Pages](https://murarova.github.io/js-band-hw-task-3/build/)

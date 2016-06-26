# Angular 2 TPL-Framework

## How to use:
1. install node.js
2. `npm install`
3. `npm start`

## Structure
```
TPL-Framework/
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.ts                * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 │   ├──theme/                 *
 │   │   └──...                *
 │   │
 │   ├──content/               *
 │   │   ├──...                *
 │   │   └──app.ts             *
 │   │
 │   └──resources/             * img ...
 │       └──icon/              *
 │
 ├──test/                      *
 │
 └──package.json               *
```

### Screen for: 
- Display Content [WIP]
- Settings
- Add files (maybe component)

### Component for:
- Search files
- Title bar
- Navigation bar
- Content bar
- Display properties

## Starting
1. The systemjs.config.js in the main folder loading every necessary file like main.js, index.js and all node_modules.
2. The main.js loading the template(!) of the main starting screen in index.html, which will load the content afterwards. 
3. At the moment it's reachable on port "3000" in your localhost.

## Addons
- Gulp for workflow control
- Polymer as Front-End
- Npm and Bower for package management
- May webpack for testing and building http://webpack.github.io/
- May Protractor for our end-to-end tests
- May Karma for unit tests

## Questions
- Want a starting screen?
- 

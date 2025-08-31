# React virtual note

## React + Vite Setup
1) `npm create vite@latest`
    set project name as './' to do setup in same directory,
    Choose: React as framework & JS as variant as per now
    
2) `npm install` - to install required packages

3) `npm run dev` - to run the project
    this can be changed to npm start by changing dev script to start.

4) Now, modify the content of App.jsx file which contains the component. 
    Review the comments given in the code for further details. <br>
.<br>
.<br>
5) `npm i react-router-dom`  - to install react router & follow router steps


## Router Steps:-
* import required component using: `import {BrowserRouter, Routes, Route} from 'react-router-dom'`

* Inside return statement, `<BrowserRouter>..<Routes>...<Route/>`

* Instead of writing full code for any page, we will make a jsx file for each page component and then link it into `<Route/>` for better visibility and readability. It is also the best practice to perform.

* Make new component, export it, import to App.jsx then set the routing as `<Route path='/' element= {<Home/>} />`. Better to use PascalCase while naming the component and file name.


## Adding styles to specific components:-
* camelCase is used (font-size in css = fontSize in React)

* className is used (in html, class = ' ' but in jsx class should be replaced by className)

* `<tagName style={{color: 'red', backgroundColor: 'navy'}}> Inline CSS </tagname>`

* For using external CSS, follow the following steps:
    * make the new external css file suppose `Name.css`
    * then import that css file to the respective jsx file as : `import './Name.css'`


## Navigation in React (Anchor Tag Alternative)
Use case : to avoid full page reload and preserve application state 
* Alt1- Using Function call
* Alt2- Using `useNavigate` hook
* Alt3- Using `Link` component provided by `react-router-dom`
    * Just replace `<a href='/home'> click me </a>` with `<Link to='/home'> click me </Link>`


## About File structure
* `node_modules` : required dependencies and packages storage, download when npm install command is run

* `public` : Used for static assets like images, icons, or fonts that don’t go through the build process.

* `src` : the place where we interact the most - heart of our app, where actual code lies.
    * `assets` : a subfolder for images, fonts, or other static resources used in your components.
    * `App.css` : Styles specific to the App.jsx component.
    * `App.jsx` : The main React component—often the root of your component tree where we define the layout and logic of your app’s core UI.
    * `index.css` : Global styles applied across your entire app. Useful for setting base styles like fonts, margins, or resets.
    * `main.jsx` : Entry point of our react app. It renders the App component into the DOM using ReactDOM.createRoot.

* `.gitignore` : Tells Git which files/folders to ignore (e.g., node_modules, .env, build files).

* `eslint.config.js` : Configuration for ESLint, which helps catch syntax and style issues.

* `index.html` : The base HTML file loaded in the browser. Vite injects your React app into this file during build.

* `package-lock.json` : Generated automatically when we install packages. Locks the exact versions of dependencies to ensure consistent installs.

* `package.json` : Blueprint of project. Lists dependencies, scripts (like dev, build, start), and metadata.

* `README.md` : Great place to describe your project, setup instructions, and usage. From which we are seeing this documentation.

* `vite.config.js` : Configuration of vite. You can customize build options, plugins, aliases, and more.


## Some definitions
1) React JS
    It is a popular JS library for building UI for web apps. It was created and maintained by Facebook and is widely adopted by developers due to its efficiency, flexibility and component-based architecture. File extension is jsx.

2) Diffing - It is the process of getting difference between current VDOM and previous VDOM

3) Reconcillation - It is the process of injecting the difference between VDOM in DOM.

4) Compilation
    It involves translating high-level programming language code directly into machine code. This machine code is specific to a particular hardware architecture and can be executed directly by the CPU.

5) Transpilation
    It is the process of converting a language into an equivalent version of the same language. Modern js can be transpiled into older syntax, making it compatible with older browsers.

6) Babel: A JS Compiler
    It is a popular JS compiler that allows developers to use newer JS syntax features in their code, even if the target environment doesn't support them natively. It's often used to write code in the latest ECMASCRIPT(ES) standards while ensuring compatibility with older browsers or environments. Key feature of Babel is transpilation.

    Note:-The browser only understand html,css and js, here we use jsx to write html code inside js but jsx isn't understood by the browser so to solve that limitation, babel is used.
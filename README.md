# React virtual note

## React + Vite Setup
1) `npm create vite@latest`
    set project name as './' to do setup in same directory. <br>
    Choose: React as framework & JS as variant as per now
    
2) `npm install` - to install required packages

3) `npm run dev` - to run the project <br>
    This can be changed to npm start by changing dev script to start.

4) Now, modify the content of App.jsx file which contains the component. <br>
    Review the comments given in the code for further details. <br>
.<br>
.<br>
5) `npm i react-router-dom`  - to install react router & follow router steps


## Router Steps:-
* import required component using: `import {BrowserRouter, Routes, Route} from 'react-router-dom'`

* Inside return statement, `<BrowserRouter>..<Routes>. <Route>...<Route/>.<Routes/>..<BrowserRouter/>`

* Instead of writing full code for any page, we will make a jsx file for each page component and then link it into `<Route/>` for better visibility and readability. It is also the best practice to perform.

* Make new component, export it, import to App.jsx then set the routing as `<Route path='/' element= {<Home/>} />`. Better to use PascalCase while naming the component and file name.

* Keep path's name in kebab-case `/pathname = /path-name`


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


## Using Components for code reusability
* Instead of doing this to apply same kind of property to different elements..
```
<button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>Register</button> 
<button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>Login</button>
<button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>Logout</button> 
```
* We can make a component for that element such that we can import it and use it wherever needed. <br>
```
Keep this kind of code and export it.
<button style={{backgroundColor: 'red' , padding: '10px' , color: 'white'}}>argument.haha</button> 
export default componentName
```
* But, importing and using will make it static, means the content remains the same as defined in the recently made component. So, to make it dynamic, we will use props (property) in react. It's like passing argument while calling the function. This means that, we will pass a property(props/argument) while using component in the file where it is used. Such that it will pass that value whenever it calls that recurring component.

* import it as : `import Button from "./Button";` <br>
    Then, give a attribute/property to the element with content to be delievered. Doing this will pass the value of property as argument to the reusable component. It treats that attribute as an object.
```
<Button haha="Register" />
<Button haha="Login" />
<Button haha="Logout" />
```
* We can also pass multiple props just by adding as much as required arguments.

## Hooks in React
* `useState` - lets your component remember values (like user input) works like variable <br>
    If the value of variable is changing then we don't use variable to store such value since in react, variable's value is updated internally but the updates are not visible externally like in javascript or other programming logic. <br>

    ` var count = 0;`
    * Doing this, the value of count is always displayed 0 by the browser even if the value of count is incremented or decremented. So, for the variables whose value keeps changing, we use useState function or hook of react.

    ` const [value, setValue] = useState(0)`
    * Here, value is variable that holds 1st value as 0 & setvalue is a function. <br>
    Follow, the code file `UseState.jsx` to review code.

* `useEffect` - subscription (getting notified and doing action when any event is trigerred) <br>
    It is a React Hook that lets you perform side effects in functional components. Think of side effects as anything that interacts with the outside world or changes something beyond the scope of the component—like fetching data, setting up subscriptions, or manually updating the DOM. In React, side effects include:
    * Fetching data from an API
    * Setting up event listeners or timers
    * Updating the document title
    * Subscribing to external services (e.g., WebSocket) <br>

    Types of useEffect - 3 types (trigger point) 
    * First type - base syntax (80% used) executes on page visit
    ```
         useEffect(()=>{
           ....
         },[])    

    2 argument need to be passed.
    First arg is function and 2nd arg is array (dependency array) which is empty.
    ```

    * Second type - same as first with some state (15% used)
     ```
         useEffect(()=>{
           ....
         },[state1])     
    ```

    * Third type - only one argument (function) 5% used
     ```
         useEffect(()=>{
        ....
         })     

     Executes upon any changes in a project no dependency array.
     Can be used for real time project but better to use WebSocket instead of this.
     ```
     Follow, the code file `LearnuseEffect.jsx` to review code.


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
1) React JS <br>
    It is a popular JS library for building UI for web apps. It was created and maintained by Facebook and is widely adopted by developers due to its efficiency, flexibility and component-based architecture. File extension is jsx.

2) Diffing - It is the process of getting difference between current VDOM and previous VDOM

3) Reconcillation - It is the process of injecting the difference between VDOM in DOM.

4) Compilation <br>
    It involves translating high-level programming language code directly into machine code. This machine code is specific to a particular hardware architecture and can be executed directly by the CPU.

5) Transpilation <br>
    It is the process of converting a language into an equivalent version of the same language. Modern js can be transpiled into older syntax, making it compatible with older browsers.

6) Babel: A JS Compiler <br>
    It is a popular JS compiler that allows developers to use newer JS syntax features in their code, even if the target environment doesn't support them natively. It's often used to write code in the latest ECMASCRIPT(ES) standards while ensuring compatibility with older browsers or environments. Key feature of Babel is transpilation.

    Note:-The browser only understand html,css and js, here we use jsx to write html code inside js but jsx isn't understood by the browser so to solve that limitation, babel is used.

7) Component <br>
    A component in React is a reusable, independent piece of code that defines the structure and behavior of the user interface (UI). It is essentially like a JavaScript function or class that returns React elements (which describe what should appear on the screen). Components make it easier to build and manage complex UIs by breaking them into smaller, manageable pieces.

8) Props<br>
    In React, props (short for "properties") are a way to pass data from a parent component to a child component. They are immutable, meaning they cannot be modified by the child component, ensuring a unidirectional data flow.

9) Hooks <br>
    React Hooks are special functions that let you use features like state, side effects, and context in function components—without needing to write class components.
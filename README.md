# math-magicians
![](https://img.shields.io/badge/Microverse-blueviolet)

# Math Magicians

> A single page app created with react to operate as a calculator and display some quotes from philosophers and mathematicians.

[Screenshot of the UI](./src/imgs/screenshot.png)

"Math Magicians" is a single page app that displays a calculator allows you to make basic operations. Now the functionalities and the main logic of the app are ready. You can use the calculator by clicking its buttons. The code was completely refactored to work with React functions instead of classes.

## Live Page

[Page Link](https://ikuartz.github.io/math-magicians/math-magicians/public/index.html)
### First requirements:


    Set up the environment and tools needed to develop a React application. In the following projects, I will develop the actual application.

    The easiest way to create a React application is using Create React App (CRA) and following the instructions in this [guide](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).
    The application should run in the browser without errors.


### Second requirements:

    Delete all the boilerplate from CRA (text, images, styles).
    Create a directory called components.
    Inside components, create a new Calculator.js file.
    In Calculator.js, create a React component that matches this design:

Calculator

    Don't add any extra design.
    Develop just the UI of the calculator; the math logic to make it work will be added in the next project.
    Use class based components.
    Once the Calculator is ready, import it and use it in your main component (App.js).
    Test it in the browser; it should render without problems.

### Third requirements:


    Copy the files calculate.js and operate.js into a logic/ directory in your project.
    Analyze the files calculate.js and operate.js, be sure you understand what they do.
    Import the files in your Calculator component.
    Implement the event handlers you need to use the math logic from calculate.js and operate.js in your React component.
    Practice what you have learned until now: use state and props, pass props to child components, use lifecycle methods, lift state up.
    Test your app in the browser. It should be able to perform math operations.

### Fourth requirements:


    Refactor the Calculator component (components/Calculator.js) from a class based component to a functional component with hooks.
    After the refactor is done, test the app in the browser. It should keep the same functionality.

> To setup the project on your machine:

## Getting Started

Clone the repository and setup the linters

## Prerequisites

- npm ( Node Package Manager )
- git and Github Account

### Setup

To get a local copy up and running follow these simple example steps.

- Open terminal
- Change the directory you want put the repo
- Then run
  i. Run git clone git@github.com:ikuartz/math-magicians.git
  ii. cd repo-name/

### Install

- **Webhint** linter

  `npm install --save-dev hint@6.x`

- **Stylelint** linter

  `npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x`

- **ESLint** linter

  `npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x`

### Run tests

- **Webhint** linter -`npx hint .` on the root of your directory of your project.
- **Stylelint** linter
  - `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
- **ESLint** linter
  - `npx eslint .` on the root of your directory of your project.




## Built With

- HTML
- CSS
- Javascript
- Love

## Live Demo

[Live Demo Link](https://ikuartz.github.io/to-do-list/)

## Author

👤 **Ivan Silva**

- GitHub: [@iKuartz](https://github.com/iKuartz/)
- Twitter: [@iKuartz01](https://twitter.com/iKuartz01)
- LinkedIn: [Ivan Silva](https://www.linkedin.com/in/ivan-silva-a47058b3/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/iKuartz/to-do-list/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- A big thank you to Microverse, for providing me the knowledge and tools to finish this project.
- An even bigger thank you to all my coding partners who helped me get here.

## 📝 License

## Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

Disclaimer: This is a human-readable summary of (and not a substitute for) the [license](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

You are free to:

    Share — copy and redistribute the material in any medium or format
    Adapt — remix, transform, and build upon the material

    The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

    Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

    NonCommercial — You may not use the material for commercial purposes.

    No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

Notices:

    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.

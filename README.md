This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Folder structure

I usually split my app into two folder:
- containers (views that fetch data / and orchastrate interaction between the components in the container)
- components (individual components )


### Style

I use CSS Modules, to encapsulate each component in their own style. 

## Testing

For testing I use enzyme. I build two snapshot tests after finishing development.

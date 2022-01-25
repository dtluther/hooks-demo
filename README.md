1. Show the `ClassicCounter` with lifecycle methods first

   1. Start with just the `count` state and the inactive buttons
   2. Add the `handleIncrease` and `handleDecrease` functionality
      1. Make sure to bind them, everyone's favorite thing
   3. Enable the `fetchDadJoke` function, and enable it on `componentDidMount`
   4. Then enable it on `componentDidUpdate` without checking the `prevState`
      1. Should be working fine
   5. Add the `console.log` to `componentDidMount` to show the constant rerendering from the `fetchDadJoke` API call
      1. Add the `prevState.count` check to stop the rerendering
   6. Add the `name` input for later

2. Build Counter with the same, and show the differences in code
3. Update the ClassicCounter document title with `componentDidUpdate` and `componentShouldUpdate`
   1. Don't bind it first, remind them this is a pain point
      1. When `this.handleIncrease` is called without a binding, this is the `window`, which doesn't have this method
4. Update the Counter document title with useEffect
   1. Talk about some more things with `useEffect` later
      1. How to do it only on mount
      2. Use different useEffects based on WHAT changes, not when things are happening
5. Introduce context in the ClassicCounter, and show how it works
   1. Explain we don't NEED context right now, but if we were creating a new application without Redux, this would be a great way to use a global state variable (for something like a theme)
   2. Context is like global variables in React, so we don't have to prop thread. We can provide the context somewhere and consume it in any descendant component of where the context is provided
   3. May not have seen context because we use Redux here and can use that for global state variables
   4. Show the render props pattern
6. Show how simple context can be with the `useContext` hook
7. Back to useEffect demo, in ClassicCounter introduce another piece of state for the name input
   1. `handleNameChange` to update the state
   2. Bind it again
   3. Add a console.log in `componentDidUpdate` to show how often it's getting called
      1. Then show how to use `prevState` to only change if it's relevant
8. In the Counter with hooks, create the same `handleNameChange` function
9. Add the console.log in the useEffect
10. Make it only runw when the count changes by adding it to the second param
11. Talk about thinking in hooks

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

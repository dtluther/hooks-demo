# Hooks Demo

1.  First run `git clone https://github.com/dtluther/counter-with-hooks.git`
2.  Show the `ClassicCounter` with lifecycle methods first

    1. Start with just the `count` state and the inactive buttons
    2. Add the `handleIncrease` and `handleDecrease` functionality
       1. Make sure to bind them, everyone's favorite thing
    3. Enable the `fetchDadJoke` function, and enable it on `componentDidMount`
    4. Then enable it on `componentDidUpdate` without checking the `prevState`
       1. Should be working fine
    5. Add the `console.log` to `componentDidMount` to show the constant rerendering from the `fetchDadJoke` API call
       1. Add the `prevState.count` check to stop the rerendering
    6. Add the `name` input for later

3.  Build `Counter` with hooks together

    1.  In order to have state in functional component, we are going to use our first hook for `count`
        1. Start by putting what we want in the jsx, and then going backward. Add `count` to jsx and then the onClick handlers for `handleIncrease` and `handleDecrease`
        2. Then show our first hook: `const [count, setCount] = useState(0)`
    2.  Now let's start building our joke by first creating the state for it. Prompt the audience for how to create the state.

        1. Before we start with the joke, talk about the way we think with hooks:
           1. We used to do lifecycle methods and think of WHEN we want to do something. With hooks, we focus more on what's changing, and what we EFFECTS we want to happen when something changes
           2. Introduce `useEffect`, and put a `console.log`
              1. Show the basic version covers `componentDidMount` and `componentDidUpdate` in one function
           3. Now we want to fetch a dad joke on mount and when the count changes
        2. `const [joke, setJoke] = useState('')`
        3. Create the async function `fetchDadJoke`
           1. use `getJokeId` to get the `jokeId` from the count
           2. `fetch`
           ```
           const response = await fetch(`${dadJokeUrl}/${jokeId}`, {
             headers: {
               Accept: 'application/json',
             },
           });
           ```
           1. `await` the `response.json()`, and return the `jsonResponse.joke`
        4. Call the function in `useEffect`, and `setJoke` with the return value
           1. Should show an error, so we'll add `fetchDadJoke` to the dep array
           2. Then we should see another more complex error around the function name
           3. Now we can do this with a better practice (for now) of defining the async function in `useEffect`
        5. Define `fetchAndSetDadJoke` in `useEffect`, and call it:

           ```
             useEffect(() => {
               console.log('In useEffect');

               async function fetchAndSetDadJoke() {
                 const jokeId = getJokeId(count);
                 const response = await fetch(`${dadJokeUrl}/${jokeId}`, {
                   headers: {
                     Accept: 'application/json',
                   },
                 });
                 const jsonResponse = await response.json();
                 setJoke(jsonResponse.joke);
               }

               fetchAndSetDadJoke();
             });
           ```

           1. Should work. Explain that `useEffect` can not take an async callback at this point, and there are experimental features in React to use something called `Suspense` for data fetching in the future. At this point, this is one of the most common ways to do async calls in `useEffect`
           2. Look at the console, and notice useEffect is being called twice because both the `count` and the `joke` are updating. Similar to `ClassicCounter`, we only want the fetch to be called when the `count` changes. Update in the `Counter`.

    3.  Add the `name` element, and prompt them to add state for it
        1. Also create a `handleNameChange` function
    4.  Show how to make the existing `useEffect` fire for only `count` and `name` changes
    5.  Show how to make a separate `useEffect` for when the name changes and print the new name to the console.

4.  If we make it through and have time, show `context` on the `ClassicCounter`, and then implement it in the `Counter` with everyone

---

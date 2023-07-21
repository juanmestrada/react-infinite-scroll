### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a javascript framework developed by Facebook. React is useful for managing state and for building reusable components.

- What is Babel?
  Babel is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?
  JSX stands for JavaScript XML. JSX allows us to write HTML in React.

- How is a Component created in React?
  A component in created in react from a function that returns a JSX React element.

- What are some difference between state and props?
  State is owned locally and the component itself can update it. Props are passed down to child components from a parent and are read-only.

- What does "downward data flow" refer to in React?
  Downward data flow is the idea that parent components pass data down to their children via props.

- What is a controlled component?
  A controlled component is a component that is controlled by React state.

- What is an uncontrolled component?
  An uncontrolled component is a component that mantains it's own internal state.

- What is the purpose of the `key` prop when rendering a list of components?
  Keys are used in React to identify which items in the list are changed, updated, or deleted.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Using an array index for a key prop is a poor choice as array indices can mutate when making changes to the array.

- Describe useEffect.  What use cases is it used for in React components?
  useEffect is used to run side effects such as fetching data on state change or for clean up when components unmount.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  The useRef Hook allows you to persist values between renders and does not cause re-renders when updated.

- When would you use a ref? When wouldn't you use one?
  useRef is used when you don't need to re-render the component when the state changes.

- What is a custom hook in React? When would you want to write one?
  A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks or reuse code logic.

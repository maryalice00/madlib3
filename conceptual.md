Conceptual Exercise
Answer the following questions below:

What is React? When and why would you use it? its a javascript library used for building interfases.
What is Babel? its a javascript complier that allows you to write code and then transform in into a version of javascript that can run in environments.
What is JSX? its a syntax extension for javacript. it allows you to write html code in javascript.
How is a Component created in React? by definig a funciton or class and it returns jsx
What are some difference between state and props? props are inputs to a react componet and they pass down a parent component. states are managed internally within the function and can be changed
What does "downward data flow" refer to in React? its the practice of passing data from one parent to a components child through props
What is a controlled component? a component that forms elements that are controlled by react state
What is an uncontrolled component? component where the elements maintain their own state
What is the purpose of the key prop when rendering a list of components? it gives each element in a list a stable identity
Why is using an array index a poor choice for a key prop when rendering a list of components? it can cause issues when items are added removed or reordered in the list.
Describe useEffect. What use cases is it used for in React components? it allows the perfrmign side effects in funcitonal compnents. its used for tassk like data fetching, subscriptons and dom manipulations
What does useRef do? Does a change to a ref value cause a rerender of a component? it creates a mutable object with a current property. it does not trigger component re renders
When would you use a ref? When wouldn't you use one? you use it when you need to modify a dom directly. you dont use it to declaratve state managemnt
What is a custom hook in React? When would you want to write one? is a funciton that uses one or more built in hooks and potentially other functions to reuse logic in the component.
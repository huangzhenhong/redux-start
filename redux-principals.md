
## Redux Principals

- Representing the whole state of your application as a single JavaScript object, called state or state tree
- The State Tree is read only, you cannot modify or change it. The only way to change the state tree is to dispatching an action, an action is plain JavaScript describes what changed in the application.
- Pure functions & Impure functions
    - Pure functions: The return value of the function depends solely on the input/parameters. It does not have observable side effects, such as database/network calls. And it doesn't overwrite the item which was passed to it. The return value are predictable.

        ```
        function square(x){
            return x*x;
        }
        ```
    - Impure functions: It's opposite, it may have side effects such as database/network calls. It may overwrite the item which was passed to it, the return value is not predictable. 
- Reducer function is a pure function, it takes the current state and returns an new state object.
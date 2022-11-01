BrowserRouter

- We alias our BrowserRouter as Router
- We wrap our whole application inside the BrowserRouter to allow all Router functionality

Routes Component

- the area where we define all of our Routes and paths
- all Route components must be nested inside of the Routes component

Route Component

- allows us to define our view
- we use the path and element keywords to define our endpoint and the component we'd like to view

parameter

- this is a part of the url address that defines and id or some identifying information
- when setting up the parameter in a path, you must precede the variable with a colon. This does 2 things
  - it defines it as a parameter which is optional
  - it declares the variable

useParams hook

- allows us to pull the parameter from the url address and use it in our component

useNavigate hook

- it is a function that returns a navigate function which allows us to navigate to another view
- only use after some action is done
- must invoke the hook first in a variable declaration
- invoke the variable with a path as the argument, (in quotes)

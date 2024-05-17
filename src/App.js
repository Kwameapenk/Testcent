// import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import Contact from "./contact";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
 
]);

function App() {
  return (
    <>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;


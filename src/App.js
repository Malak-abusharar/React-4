import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import User from "./Pages/User"
import Framework from "./Pages/Frameworks"
import Tasks from "./Pages/Tasks"
import {useContext } from "react";
import Data from "./context/Data.jsx"
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Error404 from "./Pages/Error404.jsx";
import EditTask from "Pages/editTask/EditTask";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404/>,
  },
    {
    path: "/User",
    element: <User />,
  },
    {
    path: "/Framework",
    element: <Framework />,
  },
    {
    path: "/Tasks",
    element: <Tasks />,
  },
    {
    path: "/Signin",
    element: <SignIn/>,
  },
    {
    path: "/Signup",
    element: <SignUp/>,
      },
  {
    path: "/edit-task",
    element: <EditTask/>,
  },
    {
    path: "*",
    element: <Error404/>,
  },
]);
function App() {
    const {theme} = useContext(Data);

  return (
   <div className={`${theme}`}>
    <RouterProvider router={router} />
   </div>
  );
}

export default App;

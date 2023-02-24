import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/Home';
import Update from './components/Update';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/users/add',
    element: <AddUser></AddUser>
  },
  {
    path: '/update/:email',
    element: <Update></Update>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

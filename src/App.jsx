import {BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom'
import Router from './router/Router'
import router from './router/RouterObject'
import nestedRouter from './relative and nested routing/NestedRouting'
import Spinner from './compoenets/common ui components/Spinner'
function App() {
  return (
    // <BrowserRouter>
    //    <Router/>
    // </BrowserRouter>
    <>
      <RouterProvider router={router}/>
      {/* <Spinner/> */}
      {/* <RouterProvider router={nestedRouter}/> */}
    </>
  )
}

export default App
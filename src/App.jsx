import {BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom'
import Router from './router/Router'
import router from './router/RouterObject'
import nestedRouter from './relative and nested routing/NestedRouting'
function App() {
  return (
    // <BrowserRouter>
    //    <Router/>
    // </BrowserRouter>
    <>
      <RouterProvider router={router}/>
      {/* <RouterProvider router={nestedRouter}/> */}
    </>
  )
}

export default App
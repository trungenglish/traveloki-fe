import {RouterProvider} from "react-router-dom";
import { AppRoute } from "./routes/app";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={AppRoute}/>
    </Suspense>
  )
}

export default App

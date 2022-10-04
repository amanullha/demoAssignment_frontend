import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import RequireAuth from "./Components/Authentication/RequireAuth";
import Navbar from "./Layouts/Navbar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { privateRoutes } from "./Routes/privateRoutes";
import { publicRoute } from "./Routes/publicRoutes";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className=" relative" style={{ position: 'relative' }}>

      <Navbar className="z-50 fixed top-0" />

      <div className="z-0 ">
        <Routes>


          {
            publicRoute.map(({ Name, Path, Component }, i) =>
              <Route path={Path} element={<Component />} />
            )
          }

          <Route element={<RequireAuth />}>
            <Route element={<Dashboard />} >

              {
                privateRoutes.map(({ Path, Name, Component }, i) => {

                  return (
                    <Route path={Path} element={<Component />} />
                  )

                })

              }

            </Route>
          </Route>


        </Routes>
      </div>

    </div>
  );
}

export default App;

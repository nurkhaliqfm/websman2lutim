import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {routes.detail_menu.map((val, index) => {
            return val.path !== "" ? (
              <Route
                key={index}
                path={val.path}
                element={val.component}
              ></Route>
            ) : (
              val.child.map((menuChild, index) => {
                return (
                  <Route
                    key={index}
                    path={menuChild.path}
                    element={menuChild.component}
                  ></Route>
                );
              })
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

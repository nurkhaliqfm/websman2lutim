import { BrowserRouter, Route, Routes } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import routes from "router";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      once: false,
      anchorPlacement: "center-bottom",
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="sweet-loading">
          <HashLoader
            color={"#ecb22f"}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;

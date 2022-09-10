import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./App.css";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { publicRoutes } from "./routes";
function App() {
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <BrowserRouter>
      <animated.div style={styles} className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </animated.div>
    </BrowserRouter>
  );
}

export default App;

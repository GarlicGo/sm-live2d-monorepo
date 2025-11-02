import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './router';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {routes.map((route, index) => {
            const RouteComponent = route.component;
            return (
              <Route 
                key={index}
                path={route.path}
                element={<RouteComponent />}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

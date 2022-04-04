import { BrowserRouter, Switch as Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import { mainRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {mainRoutes.map((route) => {
            return (
              <Route
                component={route.component}
                path={route.path}
                exact={route.isExact}
                key={route.id}
              />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

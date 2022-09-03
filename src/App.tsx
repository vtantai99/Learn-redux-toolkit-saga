import { cityApi } from 'api';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { ROUTE } from 'constant';
import LoginPage from 'features/auth/pages/Login';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log('Boy ==>', res));
  }, []);
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTE.ADMIN.LAYOUT}
        element={<PrivateRoute children={<AdminLayout />} />}
      ></Route>
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default App;

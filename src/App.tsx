import { Button } from '@mui/material';
import { cityApi } from 'api';
import { useAppDispatch } from 'app/hooks';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import { ROUTE } from 'constant';
import { authAction } from 'features/auth/authSlice';
import LoginPage from 'features/auth/pages/LoginPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    cityApi.getAll().then((res) => console.log('Boy ==>', res));
  }, []);

  const handleLogout = () => dispatch(authAction.logoutRequest())
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>
      <Routes>
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
        <Route
          path={ROUTE.ADMIN.LAYOUT}
          element={<PrivateRoute children={<AdminLayout />} />}
        />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { ROUTE, STORAGE } from 'constant';
import { Fragment } from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute(props: RouteProps) {
  console.log('Boy 🚀 ~> props', props);
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem(STORAGE.ACCESS_TOKEN));
  if (!isLoggedIn) return <Navigate to={ROUTE.LOGIN} />;

  return <Fragment>{props.children}</Fragment>;
}

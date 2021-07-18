import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

interface IPrivateRouteProps extends RouteProps {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ path, component, ...props }) => {
  const location = useLocation();
  const { signed } = useAuth();

  if (!signed) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: location } }} />
    )
  }

  return (
    <Route
      path={path}
      component={component}
      {...props}
    />
  );
}

export default PrivateRoute;
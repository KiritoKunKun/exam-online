import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => <ReactDOMRoute {...rest} render={() => <Component />} />;

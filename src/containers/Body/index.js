import React from 'react';
import Menu from "../../components/Route/index";
import { Route, Switch } from "react-router";

export default () => {
  return (
    <Switch>
      {Menu && Menu.map((item, index) =>
        <Route key={index} path={item.path} component={item.main} exact={item.exact} />
      )}
    </Switch>
  )
}

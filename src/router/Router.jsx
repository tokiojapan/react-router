import { Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { page2Routes } from "./Page2Routes";
import { page3Routes } from "./Page3Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Switch>
      {/* exactは完全一致。指定しないと配下全てを拾ってしまう */}
      <Route exact path="/">
        <Home />
      </Route>
      {/*
     '/page1' がrenderに渡されるprops.match.urlに格納されている
     ので再利用しましょうというコード。
     アロー関数の引数 ({ match: { url }}) という書き方も要注目。
     page1/detailBも同様に書ける。
      */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path="/page1/detailB">
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page3"
        render={({ match: { url } }) => (
          <Switch>
            {page3Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

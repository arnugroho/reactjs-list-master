import React, { Suspense, lazy, Fragment } from 'react';
import Loader from "react-js-loader";


const Main = lazy(() => import('../src/Layout/Base'));

function App() {
  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="semi-circle-spin" />
              </div>
            </div>
          </div>
        }>
          {/*<Route path="/main" component={Main} />*/}
          <Main/>
        </Suspense>

        {/*<Route exact path="/" render={() => (*/}
        {/*  <Redirect to="/main/recipes" />*/}
        {/*)} />*/}
        {/* <Main /> */}
      </div>
    </Fragment>
  );
}

export default App;
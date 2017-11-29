// 热加载
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './test'
import { AppContainer } from 'react-hot-loader'

const renderApp = (Component) => {
    ReactDOM.render(
      <AppContainer>
          <Component/>
      </AppContainer>,
      document.querySelector("#react")
    );
};
renderApp(Main);

if (module.hot) {
    module.hot.accept(['../src'], () => {
        renderApp(Main)
    });
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import light from './themes/light'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(light)}>
      < CssBaseline />
      <LandingPage />
    </MuiThemeProvider>
  );
}

export const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

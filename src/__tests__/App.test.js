import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../Redux/configureStore';
import App from '../App';

describe('App js testing', () => {
  test('Renders App', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

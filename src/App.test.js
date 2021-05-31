import React  from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { StoreContext } from './store';

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <StoreContext.Provider value={[{}, () => {}]}>
        <App />
      </StoreContext.Provider>
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

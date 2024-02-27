import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import SideMenu from '../../src/components/SideMenu';
import { Provider } from 'react-redux'; // Import Provider
import store from '../../src/store/store.jsx'; // Import your Redux store

describe('SideMenu component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
        <SideMenu setsideMenu={jest.fn()} sideMenu={false} />
      </MemoryRouter>
      </Provider>
      
    );
  });
});
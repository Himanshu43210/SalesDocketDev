import React from 'react';
import businessTracker from '../../src/pages/businessTracker/businessTracker.jsx';
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Provider } from 'react-redux'; // Import Provider
import store from '../../src/store/store.jsx'; // Import your Redux store

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { businessTracker: [] } }))
}));

describe('businessTracker component', () => {
    test('renders without crashing', () => {
        render(
            <Provider store={store}>
              <MemoryRouter>
                <businessTracker />
              </MemoryRouter>
            </Provider>);
    });
  
    // Add more test cases as needed
});
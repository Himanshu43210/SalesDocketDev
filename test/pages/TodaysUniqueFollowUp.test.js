import React from 'react';
import TodaysUniqueFollowUp from '../../src/pages/FollowUp/TodaysUniqueFollowUp.jsx';
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Provider } from 'react-redux'; // Import Provider
import store from '../../src/store/store.jsx'; // Import your Redux store

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { TodaysUniqueFollowUp: [] } }))
}));

describe('TodaysUniqueFollowUp component', () => {
    test('renders without crashing', () => {
        render(
            <Provider store={store}>
              <MemoryRouter>
                <TodaysUniqueFollowUp />
              </MemoryRouter>
            </Provider>);
    });
  
    // Add more test cases as needed
});
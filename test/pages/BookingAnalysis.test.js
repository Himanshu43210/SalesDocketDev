import React from 'react';
import BookingAnalysis from '../../src/pages/BookingAnalysis/BookingAnalysis.jsx';
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Provider } from 'react-redux'; // Import Provider
import store from '../../src/store/store.jsx'; // Import your Redux store

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { BookingAnalysis: [] } }))
}));

describe('BookingAnalysis component', () => {
    test('renders without crashing', () => {
        render(
            <Provider store={store}>
              <MemoryRouter>
                <BookingAnalysis />
              </MemoryRouter>
            </Provider>);
    });
  
    // Add more test cases as needed
});
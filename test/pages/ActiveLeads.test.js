import React from 'react';
import ActiveLeads from '../../src/pages/ActiveLeads/ActiveLeads.jsx';
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Provider } from 'react-redux'; // Import Provider
import store from '../../src/store/store.jsx'; // Import your Redux store

test('Always true test', () => {
    expect(true).toBe.true;
});

test('Render test', () => {
  render(
  <Provider store={store}>
    <MemoryRouter>
      <ActiveLeads setActiveLeads={jest.fn()} ActiveLeads={false}/>
    </MemoryRouter>
  </Provider>);
});
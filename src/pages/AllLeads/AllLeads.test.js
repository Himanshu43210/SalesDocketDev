/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'; // Import if you're using redux
import store from '../../store/store'; // Adjust the path to your store accordingly
import AllLeads from './AllLeads'; // Adjust the import path to where your AllLeads component is located

describe('AllLeads Component', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
        <AllLeads />
      </Provider>
    );

    // Example of checking if a specific element/text is rendered
    // This assumes you have texts or labels that can be uniquely identified in the component
    expect(screen.getByText('Enquiry Data Excel')).toBeInTheDocument();
    // Add more assertions here to check for other elements
  });

  // You can add more tests here to check for specific behaviors or data handling
});

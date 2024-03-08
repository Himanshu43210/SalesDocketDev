/* eslint-disable no-undef */
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import BookingAnalysis from './BookingAnalysis'; // Adjust the import path as necessary

// Mock axios
jest.mock('axios');

describe('BookingAnalysis Component', () => {
  it('renders without crashing and calls axios as expected', async () => {
    const mockApiResponse = {
      data: {
        BookingAnalysis: {
          buttonList: ['Type of Booking', 'Another Type'],
          graphLabel: {
            'Type of Booking': ['Label 1', 'Label 2'],
          },
        },
      },
    };
    axios.get.mockResolvedValue(mockApiResponse);

    render(<BookingAnalysis />);

    await waitFor(() => {
      // Verify axios was called correctly
      expect(axios.get).toHaveBeenCalledTimes(2); // Adjust based on expected number of calls
      expect(axios.get).toHaveBeenCalledWith("https://api.npoint.io/a8724dcc1767c8304d1d");
      expect(axios.get).toHaveBeenCalledWith("https://api.npoint.io/e5821b0e062ec043f23e");

      // Check for a piece of text or element that should be rendered as a result
      expect(screen.getByText('Type of Booking')).toBeInTheDocument();
    });
  });

  // More tests can be added here to cover other functionalities and interactions
});
